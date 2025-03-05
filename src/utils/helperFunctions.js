export const userCredentialsFromName = (name) => {
  return (
    name
      ?.split(" ")
      ?.map((splittedName) => splittedName?.[0] || "")
      ?.filter((char) => !!char)
      ?.slice(0, 2)
      ?.join("") || "You"
  );
};

export const getApiState = (state, payload, defaultData) => {
  switch (state) {
    case "IDLE":
    case "PENDING":
      return {
        state: state,
        data: payload,
        error: null,
      };
    case "SUCCESS":
      return {
        state,
        data: payload,
        error: null,
      };
    case "FAILED":
      return {
        state,
        data: payload,
        error: payload,
      };
  }
};
