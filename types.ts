export type MainStackParamsList = {
  MainTabs: undefined;
  PlanEditScreen: {planId: number};
  PlanViewScreen: {planId: number};
  LoginScreen: undefined;
  SignUpScreen: {
    kakaoId: string;
    email: string;
    nickname: string;
    image: string;
  };
};

export interface AuthContextType {
  login: (token: string) => Promise<void>;
  logout: () => void;
  signup: (token: string) => Promise<void>;
}

export type MainTabsParamsList = {
  FinderScreen: undefined;
  PlansScreen: undefined;
  UserScreen: {userId: number};
};

export interface PersonalPlansResponseType {
  planId: number;
  startDate: string;
  endDate: string;
  country: string;
  city: string;
  forks: any;
  likes: any;
  image: string | null;
  isPublic: boolean;
}

export interface PersonalPlansDetailedResponseType {
  planId?: number;
  startDate: string | Date;
  endDate: string | Date;
  country: string | null;
  city: string | null;
  forks: any;
  likes: any;
  image: string | null;
  isPublic: boolean;
  cash: number;
  places: PlanPlace[];
  isNull: boolean;
}

export interface PlanPlace {
  planPlaceId: number;
  place: Place;
  visitDate: Date;
  orderInDay: number;
  money: number;
}

export interface Place {
  name: string;
  placeType: string;
  placeId: number;
}

export interface ImageType {
  uri: string | null;
  type: string | null;
  name: string | null;
}
