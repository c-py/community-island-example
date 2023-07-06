class ExternalScene extends window.BaseScene {
  constructor() {
    super({
      name: "test_island",
      map: {
        json: "https://sunflower-land.github.io/plugin-example/public/map.json",
      },
      player: {
        spawn: {
          x: 210,
          y: 280,
        },
      },
    });
  }
}
