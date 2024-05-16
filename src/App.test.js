import { render, screen, fireEvent, getByText } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

// test('check input box', () => {
//   render(<App />);
//   const elem = screen.getByRole("textbox");
//   expect(elem).toHaveAttribute("name","userid");
//   expect(screen.getByPlaceholderText("Enter User Name")).toBeInTheDocument();
//   expect(elem).toBeInTheDocument();
// });

// test("check password box",()=>{
//     render(<App />);
//     const elem1 = screen.getByPlaceholderText("Enter Password");
//     expect(elem1).toBeInTheDocument();
// });

// test("onclick",()=>{
//   render(<App />);
//   const elem = screen.getByRole("button");
//   fireEvent.click(elem);
//   expect(elem).toBeInTheDocument();
//   expect(screen.getByText("login succeful!")).toBeInTheDocument(); 
// });

test("user event onlick", async()=>{
  userEvent.setup();
  render(<App />);
   const elem = screen.getByText("button");
  await userEvent.click(elem);
   expect(screen.getByText("login succeful!")).toBeInTheDocument();
});
