console.log({ InsideScene: window.secret });

class ExternalScene extends window.BaseScene {
  constructor() {
    console.log("Construtued");
    super({
      name: "ExternalScene",
      map: { json: "http://localhost:3002/map.json" },
      player: {
        spawn: {
          x: 210,
          y: 280,
        },
      },
    });

    // this.setSpawn({ x: 100, y: 100 });
  }

  // async create() {
  //   console.log("Scene create!");

  //   this.map = this.make.tilemap({
  //     key: "community-map",
  //   });

  //   super.create();
  // }
}
