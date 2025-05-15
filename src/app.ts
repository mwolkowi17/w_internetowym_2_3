import "phaser";
import Boot from "./scenes/boot";
import Preload from "./scenes/preload";
import { GameStart as GameSceneStart } from "./scenes/gameStart";
import { GameName as GameSceneName } from "./scenes/sceneName";
import { SceneInstruction as GameSceneInstruction } from "./scenes/sceneInstruction";
import { SceneLevelOne as GameSceneLevelOne } from "./scenes/sceneLevelOne";
import { SceneMain1 as GameSceneMain1 } from "./scenes/sceneMain1";
import { SceneLevelTwo as GameSceneLevelTwo } from "./scenes/sceneLevelTwo";
import { SceneQuizz as GameQuizz } from "./scenes/sceneQuizz";
import { SceneTrap as GameTrap } from "./scenes/sceneTrap";
import { SceneLoose as GameLoose } from "./scenes/sceneLoose";
import { SceneMain2 as GameSceneMain2 } from "./scenes/sceneMain2";
import { SceneQuizz2 as GameQuizz2 } from "./scenes/sceneQuizz2";
import { SceneWin as GameWin } from "./scenes/sceneWin";
import { SceneLevelOneEnd as GameLevelOneEnd } from "./scenes/sceneLevelOneEnd";

const config: Phaser.Types.Core.GameConfig = {
  title: "w_interentowym_labiryncie_1_1",

  scene: [
    Boot,
    Preload,
    GameSceneStart,
    GameSceneName,
    GameSceneInstruction,
    GameSceneLevelOne,
    GameSceneLevelTwo,
    GameSceneMain1,
    GameSceneMain2,
    GameQuizz,
    GameQuizz2,
    GameTrap,
    GameLoose,
    GameWin,
    GameLevelOneEnd,
  ],
  backgroundColor: "#333",
  scale: {
    mode: Phaser.Scale.FIT,
    parent: "game-container",
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    width: 1920,
    height: 1080,
    max: {
      width: 1920,
      height: 1080,
    },
  },
};

window.addEventListener("load", () => {
  window["game"] = new Phaser.Game(config);
});
