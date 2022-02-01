import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "./useForm";

const setup = (params) => renderHook(() => useForm(params));

// keyword
test("should change keyword", () => {
  const { result } = setup();

  act(() => {
    result.current.setKeyword("Pokemon");
  });

  expect(result.current.keyword).toBe("Pokemon");
});

test("should use initial value of the keyword", () => {
  const { result } = setup({
    initialKeyword: "Matrix",
  });

  expect(result.current.keyword).toBe("Matrix");
});

// Rating
test("should change rating", () => {
  const { result } = setup();

  act(() => {
    result.current.setRating("r");
  });

  expect(result.current.rating).toBe("r");
});

test("should use initial value of the rating", () => {
  const { result } = setup({
    initialRating: "pg",
  });

  expect(result.current.rating).toBe("pg");
});

// Language
test("should change language", () => {
  const { result } = setup();

  act(() => {
    result.current.setLanguage("es");
  });

  expect(result.current.language).toBe("es");
});

test("should use initial value of the language", () => {
  const { result } = setup({
    initialLanguage: "en",
  });

  expect(result.current.language).toBe("en");
});

// Remove Filters
test("should remove filters", () => {
  const { result } = setup();

  act(() => {
    result.current.setRating("pg-13");
    result.current.setLanguage("ja");
    result.current.removeFilters();
  });

  expect(result.current.rating).toBe("g");
  expect(result.current.language).toBe("en");
});
