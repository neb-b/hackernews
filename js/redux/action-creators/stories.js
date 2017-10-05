import { AsyncStorage } from "react-native";
import { createAction } from "redux-actions";
import {
  SAVE_STORY_SUCCESS,
  SAVE_STORY_ERROR,
  UN_SAVE_STORY_SUCCESS,
  UN_SAVE_STORY_ERROR,
  REFRESH_STORIES_REQUEST,
  REFRESH_STORIES_SUCCESS,
  REFRESH_STORIES_ERROR,
  REFRESH_SAVED_STORIES_REQUEST,
  REFRESH_SAVED_STORIES_SUCCESS,
  REFRESH_SAVED_STORIES_ERROR
} from "../constants";
import { getJson } from "./fetch-builder";

const onSaveStorySuccess = createAction(SAVE_STORY_SUCCESS);
const onSaveStoryError = createAction(SAVE_STORY_ERROR);
const onUnSaveStorySuccess = createAction(UN_SAVE_STORY_SUCCESS);
const onUnSaveStoryError = createAction(UN_SAVE_STORY_ERROR);
const onRefreshStoriesRequest = createAction(REFRESH_STORIES_REQUEST);
const onRefreshStoriesSuccess = createAction(REFRESH_STORIES_SUCCESS);
const onRefreshStoriesError = createAction(REFRESH_STORIES_ERROR);
const onRefreshSavedStoriesRequest = createAction(
  REFRESH_SAVED_STORIES_REQUEST
);
const onRefreshSavedStoriesSuccess = createAction(
  REFRESH_SAVED_STORIES_SUCCESS
);
const onRefreshSavedStoriesError = createAction(REFRESH_SAVED_STORIES_ERROR);

const getSavedStories = () => {
  return AsyncStorage.getItem("savedStories").then(savedStoriesRes => {
    const savedStories = (savedStoriesRes && JSON.parse(savedStoriesRes)) || [];
    return savedStories;
  });
};

const setSavedStories = (dispatch, stories, story, unSaving) => {
  const toggleSaveAction = unSaving ? onUnSaveStorySuccess : onSaveStorySuccess;
  const toggleSaveActionErr = unSaving ? onUnSaveStoryError : onSaveStoryError;
  AsyncStorage.setItem("savedStories", JSON.stringify(stories))
    .then(() => dispatch(toggleSaveAction({ storyIds: stories, story })))
    .catch(err => dispatch(toggleSaveActionErr(err)));
};

export function saveStory(story) {
  return dispatch => {
    getSavedStories().then(stories => {
      if (!stories.length) {
        return setSavedStories(dispatch, [story.id], story);
      }

      const newStories = stories.slice();
      newStories.unshift(story.id);
      setSavedStories(dispatch, newStories, story);
    });
  };
}

export function unSaveStory(story) {
  return dispatch => {
    getSavedStories().then(stories => {
      const newStories = stories.filter(storyId => {
        return storyId !== story.id;
      });
      return setSavedStories(dispatch, newStories, story, true);
    });
  };
}

export function refreshStories(endpoint) {
  return (dispatch, getState) => {
    const state = getState();
    // hmm...
    const { savedStories: { savedStories } } = state;
    const slimSavedStories = savedStories.map(s => s.id);

    dispatch(onRefreshStoriesRequest());

    getJson("stories", endpoint)
      .then(({ stories }) => {
        const newStories = stories.map(
          story =>
            slimSavedStories.indexOf(story.id) === -1
              ? story
              : Object.assign(story, { saved: true })
        );
        dispatch(onRefreshStoriesSuccess({ newStories }));
      })
      .catch(err => dispatch(onRefreshStoriesError(err)));
  };
}

export function refreshSavedStories(storyIds) {
  const query = `stories=${storyIds.join(",")}`;

  return dispatch => {
    dispatch(onRefreshSavedStoriesRequest());

    getJson("saved", null, query)
      .then(({ stories }) => {
        dispatch(onRefreshSavedStoriesSuccess({ stories }));
      })
      .catch(err => dispatch(onRefreshSavedStoriesError(err)));
  };
}
