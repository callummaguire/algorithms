pub fn letter_combinations(digits: String) -> Vec<String> {
    if digits.is_empty() {
        return vec![];
    }

    let phone_map = vec![
        vec!["a", "b", "c"], // 2
        vec!["d", "e", "f"], // 3
        vec!["g", "h", "i"], // 4
        vec!["j", "k", "l"], // 5
        vec!["m", "n", "o"], // 6
        vec!["p", "q", "r", "s"], // 7
        vec!["t", "u", "v"], // 8
        vec!["w", "x", "y", "z"], // 9
    ];

    let mut combinations = vec!["".to_string()];

    for digit_char in digits.chars() {
        let digit = digit_char.to_digit(10).unwrap() as usize;
        if digit < 2 || digit > 9 {
            continue;
        }
        let letters = &phone_map[digit - 2];
        let mut new_combinations = Vec::new();

        for combination in &combinations {
            for &letter in letters {
                let mut new_comb = combination.clone();
                new_comb.push_str(letter);
                new_combinations.push(new_comb);
            }
        }
        combinations = new_combinations;
    }

    combinations
}


pub fn permentations(first_vector: String, second_vector: String) -> Vec<String> {
    let mut output = Vec::new();
    for char_something in first_vector.chars() {
        for child_char in second_vector.chars() {
            let mut new_string = char_something.to_string();
            new_string.push(child_char);
            output.push(new_string);
        }
    } 

    output
} 

fn main() {
    let result = letter_combinations("235".to_string());
    println!("Combinations: {:?}", result);

   let output = permentations("something".to_string(), "hello".to_string());

    println!("Combinations: {:?}", output);

}