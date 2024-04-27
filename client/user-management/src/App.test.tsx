import App from "./App"
import { render, screen, userEvent } from "./utils/test-utils"

describe("App", () => {
    it("checking where vite and react text is available", () => {
        render(<App />);
        const text = screen.getByText("src/App.tsx")
        console.log('text', text)
        expect(text).toBeInTheDocument();
    })

    it("should increment count on click", async () => {
        render(<App />);
        userEvent.click(screen.getByRole("button"));
        expect(await screen.findByText(/count is 1/i)).toBeInTheDocument();
    })
})