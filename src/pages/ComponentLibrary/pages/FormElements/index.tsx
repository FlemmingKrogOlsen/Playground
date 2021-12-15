import { useForm } from "react-hook-form";
import Form from "components/FormElements";
import Buttons from "components/FormElements/buttonsContainer";
import CustomCheckbox from "components/FormElements/customCheckbox";
import CustomRadio from "components/FormElements/customRadio";
import CustomSelect from "components/FormElements/customSelect";
import { CodeBlock, Editor } from "../pages.styled";

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
    <div style={{ width: "500px", margin: "auto" }}>
      <span className="counter">Render Count: {renderCount}</span>
      <Form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <fieldset>
          <legend>Text Input</legend>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              {...register("firstName", { required: "This is required" })}
              id="firstName"
              type="text"
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              {...register("email", { required: "This is required" })}
              id="email"
              type="email"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
        </fieldset>

        <div>
          <label htmlFor="age">Age</label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
          />
        </div>

        <div>
          <label htmlFor="date">Date</label>
          <input
            {...register("date", { valueAsDate: true })}
            id="date"
            type="date"
          />
        </div>

        <CustomSelect>
          <label htmlFor="gender">Gender</label>
          <select {...register("gender")} id="gender">
            <option value="">Select...</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </CustomSelect>

        <div>
          <label htmlFor="password">Password:</label>
          <input
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
          <label htmlFor="textarea">TextArea</label>
          <textarea {...register("textarea")} id="textarea" />
        </div>

        <CustomCheckbox>
          <div>Text</div>
          <label htmlFor="developer">
            <div>Are you a developer?</div>
            <input
              {...register("developer")}
              value="yes"
              type="checkbox"
              id="developer"
            />
            <span />
          </label>
        </CustomCheckbox>

        <div>
          <div>Text</div>
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

        <Buttons>
          <input type="submit" />
          <input type="reset" />
        </Buttons>
      </Form>
      <Editor>
        <h2>Form submit data</h2>
        <h3 style={{ marginBottom: "10px" }}>(react-hook-form)</h3>
        <CodeBlock>
          <pre style={{ fontSize: "10px" }}>
            {JSON.stringify(watch(), null, 2)}
          </pre>
        </CodeBlock>
      </Editor>
    </div>
  );
};

export default FormElements;
