export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to database
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Egzon",
        authorLastName: "Arifi",
        authorId: "FptgJ1ybQjW7Nx2h1u8UaOw16yi1",
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "CREATE_PROJECT",
          project
        });
      })
      .catch(error => {
        dispatch({
          type: "CREATE_PROJECT_ERROR",
          error
        });
      });
  };
};
