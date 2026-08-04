import { createContext, useContext, useState } from "react";

const RequestContext = createContext();

export function RequestProvider({ children }) {
  const [formData, setFormData] = useState({
    suggestion: "",
    department: "",
    budget: "",
    priority: "",
    attachment: null,
  });

  const updateForm = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <RequestContext.Provider value={{ formData, setFormData, updateForm }}>
      {children}
    </RequestContext.Provider>
  );
}

export function useRequest() {
  return useContext(RequestContext);
}
