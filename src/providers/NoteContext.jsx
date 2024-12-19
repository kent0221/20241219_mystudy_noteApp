/**
 * NoteContext.jsx
 * Providerと同じファイルにするとWarningが出るので
 */

import { createContext, useContext } from "react";

export const NoteContext = createContext();

// 作成したコンテキストを呼び出すための関数（カスタムフック化）
export const useNoteContext = () => useContext(NoteContext);

