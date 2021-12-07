import { renderHook, act } from '@testing-library/react-hooks';
import useForm from './useForm';


const setup = (params) =>
    renderHook(() => useForm(params));


// keyword
test('should change keyword' , () => {
    const { result } = setup();

    act(() => {
        result.current.updateKeyword('Pokemon');
    })

    expect(result.current.keyword).toBe('Pokemon');
})

test('should use initial value of the keyword', () => {
    const { result } = setup({
        initialKeyword: 'Matrix'
    })

    expect(result.current.keyword).toBe('Matrix');
})

// times
test('should update correctly times when used twice', () => {
    const { result } = setup({
        initialKeyword: 'Matrix'
    })

    act(() => {
        result.current.updateKeyword('b');
        result.current.updateKeyword('ba');
    })

    expect(result.current.keyword).toBe('ba');
    expect(result.current.times).toBe(2);
})

// Rating
test('should change rating', () => {
    const { result } = setup();

    act(() => {
        result.current.updateRating('r');
    })

    expect(result.current.rating).toBe('r');
})

test('should use initial value of the rating', () => {
    const { result } = setup({
        initialRating: 'pg'
    })

    expect(result.current.rating).toBe('pg');
})

// Language
test('should change language', () => {
    const { result } = setup();

    act(() => {
        result.current.updateLanguage('es');
    })

    expect(result.current.language).toBe('es');
})

test('should use initial value of the language', () => {
    const { result } = setup({
        initialLanguage: 'en'
    })

    expect(result.current.language).toBe('en');
})

// Remove Filters
test('should remove filters', () => {
    const { result } = setup();

    act(() => {
        result.current.updateRating('pg-13');
        result.current.updateLanguage('ja');
        result.current.removeFilters();
    })

    expect(result.current.rating).toBe('g');
    expect(result.current.language).toBe('en');
})