import { WheaterModel } from '@/domain/models';

export interface LoadWheather {
  get: (params: LoadWheather.Params) => Promise<LoadWheather.Model>;
}

export namespace LoadWheather {
  export type Params = {
    email: string;
    password: string;
  };

  export type Model = WheaterModel;
}
