import { handleActions } from "redux-actions";
import {
  LOAD_SETTINGS_SUCCESS,
  LOAD_SETTINGS_ERROR,
  CHANGE_VIEW,
  SAVE_STORY_SUCCESS,
  UN_SAVE_STORY_SUCCESS,
  CHANGE_TOPIC_REQUEST
} from "../constants";
import getTitle from "../../helpers/get-title";

const initialState = {
  loading: true,
  error: false,
  viewingStories: true,
  title: "Top Stories",
  topics: {
    currentlySelected: "topstories",
    available: [
      "topstories",
      "askstories",
      "showstories",
      "beststories",
      "jobstories"
    ]
  },
  savedStoryIds: [],
  settings: {
    darkMode: {
      id: "darkmode",
      name: "Dark mode",
      active: false
    }
  }
};

export default handleActions(
  {
    [LOAD_SETTINGS_SUCCESS]: (
      state,
      { payload: { settings, savedStoryIds = [] } }
    ) => {
      return {
        ...state,
        loading: false,
        settings: settings,
        savedStoryIds: savedStoryIds
      };
    },
    [LOAD_SETTINGS_ERROR]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload
    }),
    [CHANGE_VIEW]: (state, { payload }) => {
      const { viewingStories, topics: { currentlySelected } } = state;
      const newViewingStoriesBool = !state.viewingStories;

      const title = newViewingStoriesBool
        ? getTitle(currentlySelected)
        : "Read it later";
      return {
        ...state,
        viewingStories: !state.viewingStories,
        title
      };
    },
    [SAVE_STORY_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        savedStoryIds: payload.savedStoryIds
      };
    },
    [UN_SAVE_STORY_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        savedStoryIds: payload.savedStoryIds
      };
    },
    [CHANGE_TOPIC_REQUEST]: (state, { payload: { newTopic } }) => ({
      ...state,
      title: getTitle(newTopic),
      topics: { available: state.topics.available, currentlySelected: newTopic }
    })
  },
  initialState
);
