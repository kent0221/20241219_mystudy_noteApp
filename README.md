# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## うまくいかなかった点

Main.jsx
onChange イベントにて、value の値を activeNote.title だとワーニング発生

---

'arning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components Error Component Stack
at input (<anonymous>)
at div (<anonymous>)
at div (<anonymous>)
at Main.jsx:15:26
at section (<anonymous>)
at div (<anonymous>)
at \_c (Grid.jsx:12:11)
at \_c (HFLayout.jsx:12:11)
at \_c (<anonymous>)
at RenderedRoute (react-router-dom.js?v=2cb01f18:5360:26)
at RenderedRoute (react-router-dom.js?v=2cb01f18:5360:26)
at Routes (react-router-dom.js?v=2cb01f18:6090:3)
at \_c (<anonymous>)
at Router (react-router-dom.js?v=2cb01f18:6033:13)
at BrowserRouter (react-router-dom.js?v=2cb01f18:8073:3)
at NoteProvider (NoteProvider.jsx:10:11)
at App (<anonymous>)'

---

value=activeNote?.title??''とすることで回避できた。
