import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { Container } from "@material-ui/core";
import ModalComponent from "./components/Modal/ModalComponent";
import TableComponent from "./components/TableUI/TableComponent";
 
function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg" style={{ padding: 20, marginLeft: 10 }}>
        <ModalComponent title="Add user" />

        <TableComponent />
      </Container>
    </Provider>
  );
}

export default App;
