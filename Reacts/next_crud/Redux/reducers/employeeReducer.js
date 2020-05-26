import { ACTION_TYPES } from "../actions/actionType";

const initialState = {
  employees: [
    { id: 1, employeeName: "Employee 1", employeeDepartment: ".NET Team" },
    { id: 2, employeeName: "Employee 2", employeeDepartment: "Mobile Team" },
    { id: 3, employeeName: "Employee 3", employeeDepartment: "Design Team" },
  ],
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_EMPLOYEE:
      return { ...state };

    case ACTION_TYPES.ADD_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.concat({...action.payload} )
      };

    case ACTION_TYPES.EDIT_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((content, index) =>
          content.id === action.payload.id
            ? { ...content, employees:action.payload }
            : content
        ),
      };

    case ACTION_TYPES.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(
          (employee) => employee.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default employeeReducer;
