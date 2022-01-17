import useInput from "../hooks/use-input";
const BasicForm = (props) => {
  const {
    value: firstValue,
    isValid: firstIsValid,
    hasError: firstHasError,
    valueChangeHandler: firstChangeHandler,
    inputBlurHandler: firstBlurHandler,
    reset: resetFirstInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastValue,
    isValid: lastIsValid,
    hasError: lastHasError,
    valueChangeHandler: lastChangeHandler,
    inputBlurHandler: lastBlurHandler,
    reset: resetLastInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailnput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (firstIsValid && lastIsValid && emailIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!firstIsValid || !lastIsValid || !emailIsValid) {
      return;
    }
    resetFirstInput();
    resetLastInput();
    resetEmailnput();
  };
  const firstInputClasses = firstHasError
    ? "form-control invalid"
    : "form-control";
  const lastInputClasses = lastHasError
    ? "form-control invalid"
    : "form-control";
  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstInputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
            value={firstValue}
          />
          {firstHasError && (
            <p className="error-text">First Name must not be empty</p>
          )}
        </div>
        <div className={lastInputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
            value={lastValue}
          />
          {lastHasError && (
            <p className="error-text">Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        {emailHasError && <p className="error-text">Add @ to Email please</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
