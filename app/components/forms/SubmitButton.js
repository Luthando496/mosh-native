import { useFormikContext } from "formik";
import MyButton from "../MyButton";

const SubmitButton = ({ children, bgColor }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <>
      <MyButton bgColor={bgColor} onPress={handleSubmit}>
        {children}
      </MyButton>
    </>
  );
};

export default SubmitButton;
