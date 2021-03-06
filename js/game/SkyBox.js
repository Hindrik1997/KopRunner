class SkyBox extends THREE.Mesh {
    constructor(scene, directory) {
        let urls = [directory + 'posx.jpg', directory + 'negx.jpg', directory + 'posy.jpg', directory + 'negy.jpg', directory + 'posz.jpg', directory + 'negz.jpg'],
            skyGeometry = new THREE.CubeGeometry(10000, 10000, 10000),
            materialArray = [],
            textureLoader = new THREE.TextureLoader();

        for (let url of urls) {
            materialArray.push(new THREE.MeshBasicMaterial({
                map: textureLoader.load(url),
                side: THREE.BackSide
            }));
        }

        let skyMaterial = new THREE.MeshFaceMaterial(materialArray);

        super(skyGeometry, skyMaterial);
        scene.add(this);
        this.envMap = new EnvMap(directory).map;

        let skyBox = this;
        this.loop = scene.main.loop.add(function() {
            let pos = scene.camera.getWorldPosition();
            skyBox.position.set(pos.x, pos.y, pos.z);
        });
    }
}
