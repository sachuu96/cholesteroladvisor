import React from "react";
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import { useScreens } from "react-native-screens";

import HomeScreen from "@app/containers/layouts/home";
import SplashScreen from "@app/containers/layouts/splash";
import ProfileScreen from "@app/containers/layouts/profile";
import InputScreen from "@app/containers/layouts/profile/Input";
import SelectionScreen from "@app/containers/layouts/profile/Selection";
import FinalviewScreen from "@app/containers/layouts/profile/Finalview";
import RiskScreen from "@app/containers/layouts/profile/Risk";

import DietPlanScreen from "@app/containers/layouts/dietPlan";

import ExercisePlanScreen from "@app/containers/layouts/exercisePlan";
import WalkTestScreen from "@app/containers/layouts/exercisePlan/pages/walkTest";
import TimerScreen from "@app/containers/layouts/exercisePlan/pages/timer";
import ExPlanScreen from "@app/containers/layouts/exercisePlan/pages/exPlan";
import SugestionScreen from "@app/containers/layouts/exercisePlan/pages/sugestions";
import FirstExScreen from "@app/containers/layouts/exercisePlan/pages/ex1";
import SecondExScreen from "@app/containers/layouts/exercisePlan/pages/ex2";
import HeartRateScreen from "@app/containers/layouts/exercisePlan/pages/heartRate";
import FirstExcScreen from "@app/containers/layouts/exercisePlan/pages/ex1";
import SecondExcScreen from "@app/containers/layouts/exercisePlan/pages/ex2";
import ThirdExcScreen from "@app/containers/layouts/exercisePlan/pages/ex3";
import ForthExcScreen from "@app/containers/layouts/exercisePlan/pages/ex4";
import FifthExcScreen from "@app/containers/layouts/exercisePlan/pages/ex5";
import SixExcScreen from "@app/containers/layouts/exercisePlan/pages/ex6";
import AerobicFitness from "@app/containers/layouts/exercisePlan/pages/aerobicFitness";
import MuscularFitness from "@app/containers/layouts/exercisePlan/pages/muscularFitness";
import AbsFitness from "@app/containers/layouts/exercisePlan/pages/absFitness";
import CommonWorkout from "@app/containers/layouts/exercisePlan/pages/commonWorkout";
import MyFlatList from "@app/containers/layouts/exercisePlan/pages/flatList";
import Arm from "@app/containers/layouts/exercisePlan/pages/armWorkout";
import Abs from "@app/containers/layouts/exercisePlan/pages/absWorkout";
import Leg from "@app/containers/layouts/exercisePlan/pages/legWorkout";
import Chart from "@app/containers/layouts/exercisePlan/pages/chart";
import CommonChart from "@app/containers/layouts/exercisePlan/pages/commonChart";
import Mixed from "@app/containers/layouts/exercisePlan/pages/mixedWorkout";

import StressReleaseScreen from "@app/containers/layouts/stressRelease";
import { SignIn } from "@app/containers/layouts/auth";

import { ArrowBackIcon } from "@app/assets/icons";

import { TopNavigationBar } from "./components/topNavigationBar";

import { getCurrentRouteState, isRootRoute } from "./util";
import { KEY_NAVIGATION_BACK } from "./constants";

const MenuTopNavigationParams = {
  header: props => {
    const { routeName } = getCurrentRouteState(props.navigation);
    return (
      <TopNavigationBar
        {...props}
        backIcon={!isRootRoute(routeName) && ArrowBackIcon}
        title={routeName}
        onBackPress={() => {
          props.navigation.goBack(KEY_NAVIGATION_BACK);
        }}
      />
    );
  }
};

const AuthNavigationMap = {
  ["Sign In"]: SignIn,
  ["Sign Up"]: ProfileScreen
};

const ProfileNavigationMap = createStackNavigator(
  {
    ["Profile"]: ProfileScreen,
    ["Input"]: InputScreen,
    ["Selection"]: SelectionScreen,
    ["Finalview"]: FinalviewScreen,
    ["Risk"]: RiskScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const DietPlanNavigationMap = createStackNavigator(
  {
    ["Diet Plan"]: DietPlanScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const ExerciseNavigationMap = createStackNavigator(
  {
    ["Exercise Plan"]: ExercisePlanScreen,
    ["WalkTest"]: WalkTestScreen,
    ["Timer"]: TimerScreen,
    ["ExPlan"]: ExPlanScreen,
    ["Sugestion"]: SugestionScreen,
    ["FirstEx"]: FirstExScreen,
    ["SecondEx"]: SecondExScreen,
    ["HeartRate"]: HeartRateScreen,
    ["FirstExcScreen"]: FirstExcScreen,
    ["SecondExcScreen"]: SecondExcScreen,
    ["ThirdExcScreen"]: ThirdExcScreen,
    ["ForthExcScreen"]: ForthExcScreen,
    ["FifthExcScreen"]: FifthExcScreen,
    ["SixExcScreen"]: SixExcScreen,
    ["AerobicFitness"]: AerobicFitness,
    ["MuscularFitness"]: MuscularFitness,
    ["AbsFitness"]: AbsFitness,
    ["MyFlatList"]: MyFlatList,
    ["CommonWorkout"]: CommonWorkout,
    ["Arm"]: Arm,
    ["Abs"]: Abs,
    ["Leg"]: Leg,
    ["Chart"]: Chart,
    ["CommonChart"]: CommonChart,
    ["Mixed"]: Mixed
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const StressPlanNavigationMap = createStackNavigator(
  {
    ["StressReleaseScreen"]: StressReleaseScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const DashboardNavigationMap = createStackNavigator(
  {
    ["Home"]: HomeScreen,
    ["Profile"]: ProfileNavigationMap,
    ["Diet Plan"]: DietPlanNavigationMap,
    ["Exercise Plan"]: ExerciseNavigationMap,
    ["Stress Release"]: StressPlanNavigationMap
  },
  {
    defaultNavigationOptions: MenuTopNavigationParams
  }
);

const Routes = createStackNavigator(
  {
    Dashboard: DashboardNavigationMap,
    ...AuthNavigationMap,
    ["Splash"]: SplashScreen
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const createAppRouter = container => {
  useScreens();
  return createAppContainer(container);
};

export default createAppRouter(Routes);
