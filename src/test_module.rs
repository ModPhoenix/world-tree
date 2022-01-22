#[allow(dead_code)]
pub fn add_two_numbers(num1: isize, num2: isize) -> isize {
    num1 + num2
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn add_two_numbers_works() {
        let examples = vec![(1, 2, 3), (8, 2, 10), (-1, 2, 1)];

        for (num1, num2, expect) in examples {
            let result = add_two_numbers(num1, num2);

            assert_eq!(result, expect);
        }
    }
}
