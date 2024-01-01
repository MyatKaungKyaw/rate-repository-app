import {
  render,
  screen,
  userEvent,
  waitFor,
} from "@testing-library/react-native";
import { SignInForm } from "../../components/SignIn";

describe("Signin Form", () => {
  describe("pressing submit button", () => {
    it("will call submit function with username and password arguments", async () => {
      const onSubmit = jest.fn();
      const user = userEvent.setup();

      render(<SignInForm handleSubmit={onSubmit} />);

      await user.type(screen.getByPlaceholderText("User Name"), "Elle");
      await user.type(screen.getByPlaceholderText("Password"), "password");
      await user.press(screen.getByText("Sign In"));

      await waitFor(() => expect(onSubmit).toHaveBeenCalledTimes(1));
      await waitFor(() =>
        expect(onSubmit).toHaveBeenCalledWith({
          username: "Elle",
          password: "password",
        })
      );
    });
  });
});
