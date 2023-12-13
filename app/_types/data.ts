import * as d3 from "d3";

export interface Node extends d3.SimulationNodeDatum {
  islocal?: boolean;
  id?: string;
  group?: string;
  page?: string;
  value: number;
  img?: string;
  name:string;
  artist?: string;
}

export interface RegularTrack{
  is_local:false,
  name: string,
  group?: string,
  img: string,
  index: number,
  page:string,
  artist?: string

}

export interface LocalTrack{
  is_local: true,
  name:string,
  index:number,
  
}

