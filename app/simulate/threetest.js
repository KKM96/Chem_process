'use client'
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';


export default async function THREETEST(){
    const containerRef = useRef(null);
    const sceneRef = useRef(new THREE.Scene())
    const [scene, setScene] = useState(sceneRef.current);

    const [camera] = useState(() => {
        if (typeof window == 'undefined'){
            return null
        }
        const cam = new THREE.PerspectiveCamera(
            70,window.innerWidth / window.innerHeight,
            1,
            10000
        )
        cam.position.set(0,250,1000)
        return cam
    })  
    const [splineHelperObjects] = useState([]);
    const [splinePointsLength, setSplinePointsLength] = useState(4);
    const [positions] = useState([]);
    const [point] = useState(new THREE.Vector3());

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    const onUpPosition = new THREE.Vector2();
    const onDownPosition = new THREE.Vector2();
    const geometry = new THREE.BoxGeometry(20, 20, 20);
    let transformControl;
    let renderer
    let selectedObject

    const ARC_SEGMENTS = 200;

    const splines = {};

    const params = {
    uniform: true,
    tension: 0.5,
    centripetal: true,
    chordal: true,
    addPoint: addPoint,
    removePoint: removePoint,
    exportSpline: exportSpline,
    };

    const render = () => {
        // Your render logic here
        splines.uniform.mesh.visible = params.uniform;
        splines.centripetal.mesh.visible = params.centripetal;
        splines.chordal.mesh.visible = params.chordal;
        renderer.render(scene, camera);
    };

    useEffect(() => {
        if(typeof window !== 'undefined'){
        let container;
        
        const init = () => {
            container = containerRef.current;
            scene.background = new THREE.Color(0xf0f0f0);
            scene.add(camera)

            scene.add(new THREE.AmbientLight(0xf0f0f0, 3));
            const light = new THREE.SpotLight(0xffffff, 4.5);
            light.position.set(0, 1500, 200);
            light.angle = Math.PI * 0.2;
            light.decay = 0;
            light.castShadow = true;
            light.shadow.camera.near = 200;
            light.shadow.camera.far = 2000;
            light.shadow.bias = -0.000222;
            light.shadow.mapSize.width = 1024;
            light.shadow.mapSize.height = 1024;
            scene.add(light);
           

            const planeGeometry = new THREE.PlaneGeometry(2000, 2000);
            planeGeometry.rotateX(-Math.PI / 2);
            const planeMaterial = new THREE.ShadowMaterial({
            color: 0x000000,
            opacity: 0.2,
            });

            const plane = new THREE.Mesh(planeGeometry, planeMaterial);
            plane.position.y = -200;
            plane.receiveShadow = true;
            scene.add(plane);

            const helper = new THREE.GridHelper(2000, 100);
            helper.position.y = -199;
            helper.material.opacity = 0.25;
            helper.material.transparent = true;
            scene.add(helper);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.shadowMap.enabled = true;
            container.appendChild(renderer.domElement);

            const gui = new GUI();
  
            gui.add(params, 'uniform').onChange(render);
            gui.add(params, 'tension', 0, 1).step(0.01).onChange(function (value) {
            splines.uniform.tension = value;
            updateSplineOutline();
            render();
            });
            gui.add(params, 'centripetal').onChange(render);
            gui.add(params, 'chordal').onChange(render);
            gui.add(params, 'addPoint');
            gui.add(params, 'removePoint');
            gui.add(params, 'exportSpline');
            gui.open();
  
            // Controls
            const controls = new OrbitControls(camera, renderer.domElement);
            controls.damping = 0.2;
            controls.addEventListener('change', render);
    
            transformControl = new TransformControls(camera, renderer.domElement);
            transformControl.addEventListener('change', render);
            transformControl.addEventListener('dragging-changed', function (event) {
                controls.enabled = !event.value;
            });
            scene.add(transformControl);
    
            transformControl.addEventListener('objectChange', function () {
                // 여기에서 오브젝트의 위치를 변경할 수 있음
                console.log("transformControl 호출")
                updateSplineOutline();
            });
    
            document.addEventListener('pointerdown', onPointerDown);
            document.addEventListener('pointerup', onPointerUp);
            document.addEventListener('pointermove', onPointerMove);
            window.addEventListener('resize', onWindowResize);
  
            /*******
             * Curves
             *********/
    
            for (let i = 0; i < splinePointsLength; i++) {
            addSplineObject(positions[i]);
            }
    
            positions.length = 0;
    
            for (let i = 0; i < splinePointsLength; i++) {
            positions.push(splineHelperObjects[i].position);
            }
    
            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ARC_SEGMENTS * 3), 3));
    
            let curve = new THREE.CatmullRomCurve3(positions);
            curve.curveType = 'catmullrom';
            curve.mesh = new THREE.Line(geometry.clone(), new THREE.LineBasicMaterial({ color: 0xff0000, opacity: 0.35 }));
            curve.mesh.castShadow = true;
            splines.uniform = curve;
    
            curve = new THREE.CatmullRomCurve3(positions);
            curve.curveType = 'centripetal';
            curve.mesh = new THREE.Line(geometry.clone(), new THREE.LineBasicMaterial({ color: 0x00ff00, opacity: 0.35 }));
            curve.mesh.castShadow = true;
            splines.centripetal = curve;
    
            curve = new THREE.CatmullRomCurve3( positions );
            curve.curveType = 'chordal';
            curve.mesh = new THREE.Line(geometry.clone(), new THREE.LineBasicMaterial({ color: 0x0000ff, opacity: 0.35 }));
            curve.mesh.castShadow = true;
            splines.chordal = curve;
  
            for (const k in splines) {
            const spline = splines[k];
            scene.add(spline.mesh);
            }
    
            load([
                new THREE.Vector3(289.76843686945404, 452.51481137238443, 56.10018915737797),
                new THREE.Vector3( - 53.56300074753207, 171.49711742836848, - 14.495472686253045 ),
                new THREE.Vector3( - 91.40118730204415, 176.4306956436485, - 6.958271935582161 ),
                new THREE.Vector3(-383.785318791128, 491.1365363371675, 47.869296953772746)
            ]);
    
            render();

        }
        init()
        
        return()=>{
            // Clean-up 코드 추가
            document.removeEventListener('pointerdown', onPointerDown);
            document.removeEventListener('pointerup', onPointerUp);
            document.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('resize', onWindowResize);
        }}
        }, [])
        
        // functions
        function addSplineObject(position) {
            setScene(sceneRef.current);
            const material = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff });
            const object = new THREE.Mesh(geometry, material);
    
            if (position) {
                object.position.copy(position);
            } else {
                object.position.x = Math.random() * 1000 - 500;
                object.position.y = Math.random() * 600;
                object.position.z = Math.random() * 800 - 400;
            }
            object.castShadow = true;
            object.receiveShadow = true;
            scene.add(object);
            splineHelperObjects.push(object)
            return object
        }

        function addPoint() {
            // splinePointsLength ++;
            setSplinePointsLength((prevLength) => prevLength + 1)
            positions.push( addSplineObject().position );
            updateSplineOutline();
            render();
        }

        function removePoint() {
            setScene(sceneRef.current);
            if ( splinePointsLength <= 4 ) {
                return;
            }
            const point = splineHelperObjects.pop();
            // splinePointsLength --;
            setSplinePointsLength((prevLength) => prevLength - 1)
            positions.pop();
            if ( transformControl.object === point ) transformControl.detach();
            scene.remove( point );
            updateSplineOutline();
            render();
        }

        function updateSplineOutline() {
            console.log("updateSplineOutline 호출")
            for ( const k in splines ) {
                const spline = splines[ k ];
                const splineMesh = spline.mesh;
                const position = splineMesh.geometry.attributes.position;
                for ( let i = 0; i < ARC_SEGMENTS; i ++ ) {
                    const t = i / ( ARC_SEGMENTS - 1 );
                    spline.getPoint( t, point );
                    position.setXYZ( i, point.x, point.y, point.z );
                }
                position.needsUpdate = true;
            }
        }

        function exportSpline() {
            const strplace = [];
            for ( let i = 0; i < splinePointsLength; i ++ ) {
                const p = splineHelperObjects[ i ].position;
                strplace.push( `new THREE.Vector3(${p.x}, ${p.y}, ${p.z})` );
            }
            console.log( strplace.join( ',\n' ) );
            const code = '[' + ( strplace.join( ',\n\t' ) ) + ']';
            prompt( 'copy and paste code', code );
        }

        function load( new_positions ) {
            console.log("loaded")
            while ( new_positions.length > positions.length ) {
                addPoint();
            }
            while ( new_positions.length < positions.length ) {
                removePoint();
            }
            for ( let i = 0; i < positions.length; i ++ ) {
                positions[ i ].copy( new_positions[ i ] );
            }
            updateSplineOutline();
        }

        // function render() {
        //     setScene(sceneRef.current);
        //     splines.uniform.mesh.visible = params.uniform;
        //     splines.centripetal.mesh.visible = params.centripetal;
        //     splines.chordal.mesh.visible = params.chordal;
        //     renderer.render( scene, camera );
        // }

        function onPointerDown( event ) {         
            console.log("down")
            // 추가내용
            const intersects = raycaster.intersectObjects(splineHelperObjects);
            console.log(intersects)
            // console.log(scene)
            if (intersects.length > 0) {
                const object = intersects[0].object;
                if (transformControl.object !== object) {
                    transformControl.attach(object);
                    selectedObject = object;
                }
            }
            //
            onDownPosition.x = event.clientX;
            onDownPosition.y = event.clientY;
            
        }

        function onPointerUp( event ) {
            console.log("up")
            onUpPosition.x = event.clientX;
            onUpPosition.y = event.clientY;
            if ( onDownPosition.distanceTo( onUpPosition ) === 0 ) {
                transformControl.detach();
                render();
            }
        }

        function onPointerMove( event ) {
            console.log('Mouse moved')
            pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            raycaster.setFromCamera( pointer, camera );
            const intersects = raycaster.intersectObjects( splineHelperObjects, false );
            if ( intersects.length > 0 ) {
                const object = intersects[ 0 ].object;
                if ( object !== transformControl.object ) {
                    transformControl.attach( object );
                    // 추가내용
                    selectedObject = object
                    console.log("PointerMove 호출")
                    // console.log(selectedObject)
                }
            }
        }

        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize( window.innerWidth, window.innerHeight );
            render();
        }


    return(
        <div ref={containerRef}></div>
    )
}

    