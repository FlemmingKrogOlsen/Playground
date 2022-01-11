import { useForm } from "react-hook-form";
import { Editor, EditorItem, Info, infoTypes } from "layout/nested.pages";
import Form, {
  AnimatedCheckbox,
  Input,
  InputPassword,
  InputRange,
  Label,
  LabelText,
  RadioButton,
  Select,
  TextArea,
} from "components/FormElements";
import fnCalculateAge from "helpers/calculateAge";
import Button from "components/Button";
import { ErrorContainer } from "components/FormElements/StyledForm";
import isEmpty from "helpers/isEmpty";

let renderCount = 0;

type FormValues = {
  developer: boolean;
  name: string;
  age: number;
  email: string;
  date: string;
  password: string;
  travel: number;
  textarea: string;
  gender: string;
  language: string;
};

const FormElements = () => {
  const DoB = "1973-04-04";

  const preloadedValues = {
    developer: true,
    name: "Flemming Krog Olsen",
    age: fnCalculateAge(DoB),
    email: "flemming@krogolsen.dk",
    date: DoB,
    password: "password",
    travel: 15,
    textarea: "Profile description could be here.....",
    gender: "male",
    language: "react",
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: preloadedValues,
  });

  return (
    <div>
      <Form
        onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data, null, 2));
        })}
      >
        <fieldset>
          <legend>AnimatedCheckbox in fieldset w/legend</legend>
          <AnimatedCheckbox
            label="Are you a developer?"
            {...register("developer")}
          />
        </fieldset>

        <div>
          <Label htmlFor="name">First Name</Label>
          <Input
            {...register("name", { required: "Name is required" })}
            type="text"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email", { required: "Email is required" })}
            type="email"
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <InputPassword
            toggle
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password is required to be Minimum 8 chars",
              },
            })}
          />
        </div>

        <div>
          <Label htmlFor="date">DoB</Label>
          <Input
            {...register("date", { valueAsDate: true })}
            defaultValue={watch("date") !== undefined ? watch("date") : ""}
            type="date"
          />
        </div>

        <div>
          <Label htmlFor="age">Age</Label>
          <Input {...register("age", { valueAsNumber: true })} type="number" />
        </div>

        <div>
          <Label htmlFor="gender">Gender</Label>
          <Select {...register("gender")} defaultValue="select">
            <option value="select" disabled>
              Select...
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Whatever... just wash your hands</option>
          </Select>
        </div>

        <div>
          <Label htmlFor="travel">
            Travel Time <span>(in minutes)</span>
          </Label>
          <InputRange
            rangeValue={watch("travel")}
            min="0"
            max="45"
            step="1"
            {...register("travel")}
          />
        </div>

        <div>
          <Label htmlFor="textarea">TextArea</Label>
          <TextArea {...register("textarea")} />
        </div>

        <div>
          <LabelText>Language</LabelText>
          <div>
            <RadioButton>
              <label>
                React Typescript
                <input type="radio" {...register("language")} value="react" />
                <span />
              </label>
            </RadioButton>

            <RadioButton>
              <label>
                C# Blazor
                <input type="radio" {...register("language")} value="blazor" />
                <span />
              </label>
            </RadioButton>

            <RadioButton>
              <label>
                HTML/CSS/js
                <input
                  type="radio"
                  {...register("language")}
                  value="js"
                  disabled
                />
                <span />
              </label>
            </RadioButton>
          </div>
        </div>

        <Button type="submit" title="Submit Form" />
        <Button
          type="button"
          title="Reset Form"
          onClick={() => reset(preloadedValues)}
        />
        <Button type="button" title="Clear Form" onClick={() => reset({})} />

        {!isEmpty(errors) && (
          <>
            <br />
            <br />
            <fieldset>
              <legend>Errors</legend>
              <ErrorContainer>
                {errors.developer && <p>{errors.developer.message}</p>}
                {errors.name && <p>{errors.name.message}</p>}
                {errors.age && <p>{errors.age.message}</p>}
                {errors.email && <p>{errors.email.message}</p>}
                {errors.date && <p>{errors.date.message}</p>}
                {errors.password && <p>{errors.password.message}</p>}
              </ErrorContainer>
            </fieldset>
          </>
        )}
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
        <Info type={infoTypes.info} style={{ color: "black" }}>
          <h2>Input Types</h2>
          <h3>Styled Components</h3>
          Text, Email, Date, Number, Radio
          <br />
          <br />
          <h3>Custom Components</h3>
          CheckBox, Password, Range
          <br />
          <br />
          <hr />
          <br />
          <h2>Others</h2>
          <h3>Styled Components</h3>
          Form (fieldset, legend), Select, TextArea
        </Info>
      </Editor>
    </div>
  );
};

export default FormElements;
