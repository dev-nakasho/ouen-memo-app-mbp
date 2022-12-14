// import { createStore } from "redux";
import { legacy_createStore as createStore } from "redux";

const initialState = {
  memoData: [
    {
      id: 1,
      title: "本日のタスク",
      text: `・ベースボタンの作成\n・ボタンクリック時の挙動修正\n・画面全体UI修正`,
      registed: "2022-10-31",
    },
    {
      id: 2,
      title: "明日のタスク",
      text: `・ベースボタンの作成\n・ボタンクリック時の挙動修正\n・画面全体UI修正`,
      registed: "2022-11-01",
    },
    {
      id: 3,
      title: "来週の予定",
      text: `・ベースボタンの作成\n・ボタンクリック時の挙動修正\n・画面全体UI修正`,
      registed: "2022-11-02",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INSERT_DATA":
      return {
        memoData: [
          ...state.memoData,
          {
            id: state.memoData.length + 1,
            ...action.payload.memoData,
          },
        ],
      };
    case "UPDATE_DATA":
      return {
        memoData: [...state.memoData].map((memo) => {
          return memo.id === action.payload.memoData.id
            ? { ...action.payload.memoData }
            : {
                ...memo,
              };
        }),
      };
    case "DELETE_DATA":
      return {
        memoData: [...state.memoData].filter(
          (memo) => memo.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
