//3 THINGS THAT WE NEED: SCENE, CAMERA, AND RENDER

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(
    75, //Field of View
    window.innerWidth / window.innerHeight, //Aspect Ratio
    0.1, //Near
    1000 //Far
);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let tableTopgeometry = new THREE.BoxGeometry( 500, 150, 10 );
let tableTopmaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let tableBoard = new THREE.Mesh( tableTopgeometry, tableTopmaterial );
scene.add( tableBoard );

let rightBackLeggeometry = new THREE.CylinderGeometry( 10, 5, 180, 50 );
let rightBackLegmaterial = new THREE.MeshLambertMaterial( {color: "pink"} );
let rightBackLeg = new THREE.Mesh( rightBackLeggeometry, rightBackLegmaterial );
scene.add( rightBackLeg );

let leftBackLeggeometry = new THREE.CylinderGeometry( 10, 5, 180, 50 );
let leftBackLegmaterial = new THREE.MeshLambertMaterial( {color: "pink"} );
let leftBackLeg = new THREE.Mesh( leftBackLeggeometry, leftBackLegmaterial );
scene.add( leftBackLeg );

let leftFrontLeggeometry = new THREE.CylinderGeometry( 10, 5, 180, 50 );
let leftFrontLegmaterial = new THREE.MeshLambertMaterial( {color: "pink"} );
let leftFrontLeg = new THREE.Mesh( leftFrontLeggeometry, leftFrontLegmaterial );
scene.add( leftFrontLeg );

let rightFrontLeggeometry = new THREE.CylinderGeometry( 10, 5, 180, 50 );
let rightFrontLegmaterial = new THREE.MeshLambertMaterial( {color: "pink"} );
let rightFrontLeg = new THREE.Mesh( rightFrontLeggeometry, rightFrontLegmaterial );
scene.add( rightFrontLeg );

let screenBasegeometry = new THREE.BoxGeometry( 150, 65, 7.5 );
let screenBasematerial = new THREE.MeshLambertMaterial( {color: "pink"});
let screenBase = new THREE.Mesh( screenBasegeometry, screenBasematerial );
scene.add( screenBase );

let screenStandgeometry = new THREE.BoxGeometry( 100, 40, 12 );
let screenStandmaterial = new THREE.MeshLambertMaterial( {color: "gray"});
let screenStand = new THREE.Mesh( screenStandgeometry, screenStandmaterial );
scene.add( screenStand );

let screenArmgeometry = new THREE.ConeGeometry( 30, 30, 4 );
let screenArmmaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let screenArm = new THREE.Mesh( screenArmgeometry, screenArmmaterial );
scene.add( screenArm );

let monitorgeometry = new THREE.BoxGeometry( 150, 80, 5 );
let monitormaterial = new THREE.MeshLambertMaterial( {color: "pink"});
let monitor = new THREE.Mesh( monitorgeometry, monitormaterial );
scene.add( monitor );

let glassgeometry = new THREE.BoxGeometry( 140, 70, 2 );
let glassmaterial = new THREE.MeshLambertMaterial( {color: "white"});
let glass = new THREE.Mesh( glassgeometry, glassmaterial );
scene.add( glass );

let collectiongeometry = new THREE.BoxGeometry( 90, 90, 70 );
let collectionmaterial = new THREE.MeshLambertMaterial( {color: "gray"});
let collection = new THREE.Mesh( collectiongeometry, collectionmaterial );
scene.add( collection );

let bookOnegeometry = new THREE.CylinderGeometry( 14, 14, 82, 9, 1, false, 0, 3.1 );
let bookOnematerial = new THREE.MeshLambertMaterial( {color: "yellow"} );
let bookOne = new THREE.Mesh( bookOnegeometry, bookOnematerial );
scene.add( bookOne );

let bookTwogeometry = new THREE.CylinderGeometry( 14, 14, 82, 9, 1, false, 0, 3.1 );
let bookTwomaterial = new THREE.MeshLambertMaterial( {color: "orange"} );
let bookTwo = new THREE.Mesh( bookTwogeometry, bookTwomaterial );
scene.add( bookTwo );

let bookThreegeometry = new THREE.CylinderGeometry( 14, 14, 82, 9, 1, false, 0, 3.1 );
let bookThreematerial = new THREE.MeshLambertMaterial( {color: "#566D7E"} );
let bookThree = new THREE.Mesh( bookThreegeometry, bookThreematerial );
scene.add( bookThree );

let lampHeadgeometry = new THREE.CylinderGeometry( 15, 45, 50, 20, 1, true, 0, 6.3 );
let lampHeadmaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let lampHead = new THREE.Mesh( lampHeadgeometry, lampHeadmaterial );
scene.add( lampHead );

let lampBasegeometry = new THREE.CylinderGeometry( 15, 25, 30, 30, 7, false, 0, 6.3 );
let lampBasematerial = new THREE.MeshLambertMaterial( {color: "pink"} );
let lampBase = new THREE.Mesh( lampBasegeometry, lampBasematerial );
scene.add( lampBase );

let lampStandgeometry = new THREE.CylinderGeometry( 5, 5, 60, 32 );
let lampStandmaterial = new THREE.MeshLambertMaterial( {color: "white"} );
let lampStand = new THREE.Mesh( lampStandgeometry, lampStandmaterial );
scene.add( lampStand );

let lampBulbgeometry = new THREE.IcosahedronGeometry( 10, 4 );
let lampBulbmaterial = new THREE.MeshMatcapMaterial( {color: 0xffffff} );
let lampBulb = new THREE.Mesh( lampBulbgeometry, lampBulbmaterial );
scene.add( lampBulb );



camera.position.z = 500;

let spotLight = new THREE.SpotLight( 0xffffff );
spotLight.position.set( 100, 250, 100 );

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

let light = new THREE.PointLight( 0xffffff, 50, 100, 1);
light.position.set( 160, 142 );
scene.add( light );

scene.add( spotLight );

let controls = new THREE.OrbitControls (camera, renderer.domElement);
animate();

function animate(){
    requestAnimationFrame(animate);

    //Table
    tableBoard.rotation.x = 4.8;
    tableBoard.rotation.y = 0;
    tableBoard.position.y = 50;

    rightFrontLeg.rotation.x = 0.10;
    rightFrontLeg.position.x = 230;
    rightFrontLeg.position.y = -45;
    rightFrontLeg.position.z = 50;
    
    leftFrontLeg.rotation.x = 0.10;
    leftFrontLeg.position.x = -230;
    leftFrontLeg.position.y = -45;
    leftFrontLeg.position.z = 50;

    rightBackLeg.rotation.x = 0.10;
    rightBackLeg.position.x = 230;
    rightBackLeg.position.y = -35;
    rightBackLeg.position.z = -70;

    leftBackLeg.rotation.x = 0.10;
    leftBackLeg.position.x = -230;
    leftBackLeg.position.y = -35;
    leftBackLeg.position.z = -70;

    //Books
    collection.rotation.x = 0.1;
    collection.rotation.y = 10;
    collection.position.x = -180;
    collection.position.y = 100;

    bookOne.rotation.x = 0.1;
    bookOne.rotation.y = 5.28;
    bookOne.position.x = -190;
    bookOne.position.y = 97;
    bookOne.position.z = 40;

    bookTwo.rotation.x = 0.1;
    bookTwo.rotation.y = 5.28;
    bookTwo.position.x = -165;
    bookTwo.position.y = 98;
    bookTwo.position.z = 25;

    bookThree.rotation.x = 0.1;
    bookThree.rotation.y = 5.28;
    bookThree.position.x = -140;
    bookThree.position.y = 99;
    bookThree.position.z = 10;

    //Monitor
    screenBase.rotation.x = 4.8;
    screenBase.position.z = -30;
    screenBase.position.y = 61;

    screenStand.rotation.x = 0.1;
    screenStand.rotation.z = 29.84;
    screenStand.position.y = 100;
    screenStand.position.z = -40;

    screenArm.rotation.x = 30;
    screenArm.rotation.y = 36.9;
    screenArm.position.y = 130;
    screenArm.position.z = -25;

    monitor.rotation.x = 0.1;
    monitor.position.y = 130;
    monitor.position.z = -10;

    glass.rotation.x = 0.1;
    glass.position.y = 130;
    glass.position.z = -8;

    //Lamp
    lampHead.rotation.x = 0.01;
    lampHead.position.x = 160;
    lampHead.position.y = 150;

    lampBase.rotation.x = 0.01;
    lampBase.position.x = 160;
    lampBase.position.y = 62;

    lampStand.rotation.x = 0.01;
    lampStand.position.x = 160;
    lampStand.position.y = 105;

    lampBulb.position.x = 160;
    lampBulb.position.y = 142;

    
    renderer.render(scene, camera);
}
animate();