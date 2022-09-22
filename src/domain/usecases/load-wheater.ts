import { WheaterModel } from '@/domain/models';

export interface LoadWheather {
  get: (params: LoadWheather.Params) => Promise<LoadWheather.Model>;
}

export namespace LoadWheather {
  export type Params = {
    location_id: number;
  };

  export type Model = WheaterModel;
}
