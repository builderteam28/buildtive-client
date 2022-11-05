// const baseUrl = "https://starbucks-achfhm.herokuapp.com";
// export const createUser = (payload) => {
//   return async (dispatch, getState) => {
//     try {
//       dispatch({
//         type: LOAD_START,
//       });
//       const response = await fetch(baseUrl + "/users/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           access_token: localStorage.access_token,
//         },
//         body: JSON.stringify(payload),
//       });
//       const data = await response.json();
//       if (!response.ok) {
//         throw new Error(data.message);
//       }
//       dispatch({
//         type: USER_FORM_CLEAR,
//       });
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "New admin account has been created",
//         toast: true,
//         iconColor: "#00796b",
//         timerProgressBar: true,
//         showConfirmButton: false,
//         timer: 2500,
//       });
//       return data;
//     } catch (error) {
//       console.error(error.message);
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: `${error.message}!`,
//         confirmButtonColor: "#00796b",
//       });
//     } finally {
//       dispatch({
//         type: LOAD_END,
//       });
//     }
//   };
// };

export const loginUser = (payload) => {
  return async (dispatch, getState) => {
    try {
      console.log(payload)
    } catch (error) {
      console.error(error.message);
    }
  };
};
