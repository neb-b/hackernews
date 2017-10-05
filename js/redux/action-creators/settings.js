import { AsyncStorage } from "react-native";
import { createAction } from "redux-actions";
import {
  LOAD_SETTINGS_SUCCESS,
  LOAD_SETTINGS_ERROR,
  CHANGE_VIEW,
  CHANGE_TOPIC_REQUEST,
  CHANGE_TOPIC_SUCCESS,
  CHANGE_TOPIC_ERROR
} from "../constants";
import { getJson } from "./fetch-builder";

const onLoadSettingsSuccess = createAction(LOAD_SETTINGS_SUCCESS);
const onLoadSettingsError = createAction(LOAD_SETTINGS_ERROR);
const onChangeView = createAction(CHANGE_VIEW);

const onChangeTopicRequest = createAction(CHANGE_TOPIC_REQUEST);
const onChangeTopicSuccess = createAction(CHANGE_TOPIC_SUCCESS);
const onChangeTopicError = createAction(CHANGE_TOPIC_ERROR);

export const fetchInitialData = selectedTopic => {
  return dispatch => {
    AsyncStorage.multiGet(["settings", "savedStories"])
      .then(res => {
        const settingsRes = res[0][1];
        const settings = (settingsRes && JSON.parse(settingsRes)) || {};
        const savedStoriesRes = res[1][1];
        const savedStoryIds = (savedStoriesRes &&
          JSON.parse(savedStoriesRes)) || [];

        let query = "";
        if (savedStoryIds.length) {
          query += `savedStories=${savedStoryIds.join(",")}`;
        }

        getJson("stories", selectedTopic, query)
          .then((initialStories = []) => {
            dispatch(onLoadSettingsSuccess({ settings, initialStories }));
          })
          .catch(err => {
            dispatch(onLoadSettingsError(err));
          });
      })
      .catch(err => {
        dispatch(onLoadSettingsError(err));
      });
  };
};

export function changeView() {
  return dispatch => dispatch(onChangeView());
}

export function changeTopic(newTopic) {
  return dispatch => {
    dispatch(onChangeTopicRequest({ newTopic }));

    getJson("stories", newTopic)
      .then(({ stories }) => {
        dispatch(onChangeTopicSuccess({ stories }));
      })
      .catch(err => dispatch(onChangeTopicError(err)));
  };
}
