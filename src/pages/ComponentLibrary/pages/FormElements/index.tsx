import { useForm } from "react-hook-form";
import { Editor, EditorItem } from "layout/nested.pages";
import AnimatedCheckbox from "components/FormElements/animCheckBox";
import Form, { Input, Label, LabelText, Select, TextArea } from "components/FormElements";
import Buttons from "components/FormElements/buttonsContainer";
import CustomRadio from "components/FormElements/customRadio";
import CustomSelect from "components/FormElements/customSelect";

let renderCount = 0;

type FormValues = {
  firstName: string;
  password: string;
  age: number;
  gender: string;
  developer: string;
  date: Date;
  email: string;
  textarea: string;
  weather: string;
};

const FormElements = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  console.log(watch());
  return (
    <div>
      <Form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <fieldset style={{ textAlign: "center" }}>
          <legend>CheckBox in Fieldset</legend>
          <AnimatedCheckbox
            label="Are you a developer?"
            defaultChecked={true}
            {...register("developer")}
          />
        </fieldset>

        <div>
          <Label htmlFor="firstName">First Name:</Label>
          <Input
            {...register("firstName", { required: "This is required" })}
            id="firstName"
            type="text"
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>

        <div>
          <Label htmlFor="email">Email:</Label>
          <Input
            {...register("email", { required: "This is required" })}
            id="email"
            type="email"
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <Label htmlFor="age">Age</Label>
          <Input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
          />
        </div>

        <div>
          <Label htmlFor="password">Password:</Label>
          <Input
            {...register("password", {
              required: "This is required",
              minLength: { value: 8, message: "Minimum 8 chars" },
            })}
            id="password"
            type="password"
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <div>
          <Label htmlFor="date">Date</Label>
          <Input
            {...register("date", { valueAsDate: true })}
            id="date"
            type="date"
          />
        </div>

        <div>
          <LabelText>Language</LabelText>
          <div>
            <CustomRadio>
              <label>
                JS
                <input type="radio" {...register("weather")} value="js" />
                <span />
              </label>
            </CustomRadio>

            <CustomRadio>
              <label>
                HTML
                <input type="radio" {...register("weather")} value="html" />
                <span />
              </label>
            </CustomRadio>

            <CustomRadio>
              <label>
                CSS
                <input type="radio" {...register("weather")} value="css" />
                <span />
              </label>
            </CustomRadio>
          </div>
        </div>

        <CustomSelect>
          <Label htmlFor="gender">Gender</Label>
          <Select {...register("gender")} id="gender">
            <option value="" disabled selected>Select...</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="other">whatever just wash your hands</option>
          </Select>
        </CustomSelect>

        <div>
          <Label htmlFor="textarea">TextArea</Label>
          <TextArea {...register("textarea")} id="textarea" />
        </div>

        <Buttons>
          <input type="submit" />
          <input type="reset" />
        </Buttons>
      </Form>

      <Editor>
        <h2>Form submit data</h2>
        <h3 style={{ marginBottom: "10px" }}>(react-hook-form)</h3>
        <EditorItem>
          <pre style={{ fontSize: "10px" }}>
            {JSON.stringify(watch(), null, 2)}
          </pre>
        </EditorItem>
        <span className="counter">Render Count: {renderCount}</span>
      </Editor>
    </div>
  );
};

export default FormElements;
