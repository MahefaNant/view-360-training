export interface HotSpot {
  pitch: number;
  yaw: number;
  type: "info" | "scene";
  text: string;
  sceneId?: string;
  targetYaw?: number
  targetPitch?: number
}

export interface SceneConfig {
  title: string
  hfov: number
  pitch?: number
  yaw?: number
  type: string
  panorama: string
  hotSpots?: HotSpot[]
}

export interface PannellumConfig {
  id: "room1" | "bottom";
  description: string;
  title: string;
  image: string;
  default: {
    firstScene: string
    author?: string
    sceneFadeDuration?: number,
    autoLoad?: boolean,
    autoRotate?: number,
  }
  scenes: {
    [key: string]: SceneConfig
  }
}

declare global {
  interface Window {
    pannellum: {
      viewer: (container: string | HTMLElement, config: PannellumConfig) => void
    }
  }
}

export const pannellums: PannellumConfig[] = [
  {
    id:"room1",
    title: "Visite Virtuelle room1",
    description:"Découvrez une vue à 360° de cette room",
    image: "/static/images/panorama/inside.jpg",
    default: {
      firstScene: "room1Inside",
      author: "Mahefa Nant",
      sceneFadeDuration: 1000,
      autoLoad: true,
      autoRotate: -1,
    },
    scenes: {
      room1Inside: {
        title: "Vue Panoramique room",
        hfov: 110,
        pitch: -3,
        yaw: 15,
        type: "equirectangular",
        panorama: "/static/images/panorama/inside.jpg",
        hotSpots: [
          {
            pitch: -0.9,
            yaw: 42.4,
            type: "scene",
            text: "Montée",
            sceneId: "room1Balcon",
          },
          {
            pitch: -9.4,
            yaw: 222.6,
            type: "info",
            text: "Window",
          },
          {
            pitch: -0.9,
            yaw: 110.4,
            type: "info",
            text: "Bedroom",
          },
        ],
      },
      room1Balcon: {
        title: "Spring House or Dairy",
        hfov: 110,
        yaw: 5,
        type: "equirectangular",
        panorama: "/static/images/panorama/outside.jpg",
        hotSpots: [
          {
            pitch: -9.4,
            yaw: 222.6,
            type: "scene",
            text: "Window",
          },
        ],
      },
    },
  } , 

  {
    id:"bottom",
    title: "Visite Virtuelle entrée",
    description:"Explorez l'entrée",
    image: "/static/images/panorama/image3.jpg",
    default: {
      firstScene: "bottom",
      author: "Mahefa Nant",
      sceneFadeDuration: 1000,
      autoLoad: true,
      autoRotate: -1,
    },
    scenes: {
      bottom: {
        title: "Entrée",
        hfov: 110,
        yaw: 140,
        type: "equirectangular",
        panorama: "/static/images/panorama/image3.jpg",
        hotSpots: [
          {
            pitch: -5.0,
            yaw: 180.0,
            type: "info",
            text: "Porte Principale",
          },
          {
            pitch: 10.0,
            yaw: 90.0,
            type: "info",
            text: "Murale",
          }
        ],
      },
    },
  }
];


export const getPannellumById = (id: string) => pannellums.find(scene => scene.id === id);