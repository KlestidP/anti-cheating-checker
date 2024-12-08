import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./button";
import '@testing-library/jest-dom';
import App from './App.js';
import getProbability from './findingProbability.js'

test('test 1', () => {
    let firstCode = `
    #include <bits/stdc++.h>
    using namespace std;
    int main() {
      cout << 5;
      return 0;
    }
    `;
    let secondCode = `
    #include <iostream>
    using namespace std;
    int main() {
      cout << 5;
      return 0;
    }
    `
    const result = getProbability(firstCode, secondCode)
    expect(result).toBe(100);
  });

  test('test 2', () => {
    let firstCode = `
    #include <bits/stdc++.h>
    using namespace std;
    int main() {
      int n;
      cin >> n;
      cout << n + 1;
      return 0;
    }
    `;
    let secondCode = `
    #include <iostream>
    int n;
    int main() {
      std::cin >> n;
      std::cout << n + 1;
      return 0;
    }
    `
    const result = getProbability(firstCode, secondCode)
    expect(result).toBe(100);
  });

  test('test 3', () => {
    let firstCode = `
    #include <bits/stdc++.h>
    using namespace std;
    int main() {
      int n;
      cin >> n;
      cout << ((n) + (1));
      return 0;
    }
    `;
    let secondCode = `
    #include <iostream>
    int n;
    int main() {
      std::cin >> n;
      std::cout << n + 1;
      return 0;
    }
    `
    const result = getProbability(firstCode, secondCode)
    expect(result).toBe(100);
  });

  test('test 4', () => {
    let firstCode = `
    #include <bits/stdc++.h>
    using namespace std;
    int main() {
      int n;cin >> n;cout << n + 1;return 0;
    }
    `;
    let secondCode = `
    #include <iostream>
    int n;
    int main() {
      std::cin >> n;
      std::cout << n + 1;
      return 0;
    }
    `
    const result = getProbability(firstCode, secondCode)
    expect(result).toBe(100);
  });

  test('test 5', () => {
    let firstCode = `
    #include <bits/stdc++.h>
    using namespace std;
    int main() {
     cout << 5;
     /*
     multiline comment
     */
     return 0;
    }
    `;
    let secondCode = `
    #include <iostream>
    int main() {
      std::cout << 5; //one-line comment
      return 0;
    }
    `
    const result = getProbability(firstCode, secondCode)
    expect(result).toBe(100);
  });
  

test('renders the correct app title', () => {
    render(<App />);
    const headerElement = screen.getByText(/Code Similarity Checker/i); // Change the text to match your actual content
    expect(headerElement).toBeInTheDocument();
  });
  

test("calls onClick when the button is clicked", () => {
  const mockHandler = jest.fn();
  render(<Button label="Click Me" onClick={mockHandler} />);
  const buttonElement = screen.getByText(/click me/i);
  fireEvent.click(buttonElement);
  expect(mockHandler).toHaveBeenCalledTimes(1);
});
