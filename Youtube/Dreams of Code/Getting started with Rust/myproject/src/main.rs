mod player;
mod game;

use core::panic;
use std::collections::HashMap;
use std::collections::HashSet;

use std::io::{ stdout, BufWriter };
use ferris_says;

use std::string::String;

use std::fs::File;

struct Viking {
    pub name: & 'static str,
    pub age: u8,
}

impl Viking {
    pub fn say_hellow(&self) {
        println!("Hi, my name is {}. I am {}", self.name, self.age);
    }
}

struct Spell {
    pub name: & 'static str,
    pub mana_cost: u8,
}

type Strength = u8;

type Agility = u8;

type Dexterity = u8;

enum PlayerClass {
    Mage(Spell),
    Warrior(Strength),
    Thief(Agility, Dexterity),
}

trait Movable {
    fn move(&mut self, x: i64, y: i64);
}

struct Player {
    x: i64,
    y: i64,
}

impl Movable for Player {
    fn move(&mut self, x: i64, y: i64) {
        self.x += x;
        self.y += y;
    }
}

struct Wrapper<T> {
    pub value: T
}

fn myfunc(mut y: i32) {
    y += 5;
    println!("y: {}", y);
}

fn transform(y: &u32) -> u32 {
    y * y
}

fn filter(y: &u32) -> bool {
    *y % 2 == 1
}

fn pattern_match(name: &str) -> String {
    match name {
        "Susan" => "Hello, Susan".to_string(),
        "Maria" => "Goodbye, Maria".to_string(),
        x => format!("I don't know you, {}", x),
    }
}

fn is_palindrome(x: &std::string::String) -> bool {
    let rev = x.chars().rev().collect::<String>();
    return rev == *x;
}

fn main() {
    let msg = b"Hello World!";
    let width = 24;
    let mut writer = BufWriter::new(stdout());

    ferris_says::say(msg, width, &mut writer)
        .expect("an error ocurred!");

    let mut numbers = vec![7, 8, 9];

    numbers.push(10);
    numbers.push(11);
    numbers.push(12);

    println!("numbers: {:?}", numbers);

    let vikings = HashMap::from([
        ("Olaf".to_string(), 24),
        ("Ragnar".to_string(), 25),
        ("Harald".to_string(), 18),
    ]);

    println!("Ragnar's Age: {}", vikings["Ragnar"]);

    let classes = HashSet::from([
        "mage",
        "warrior",
        "thief",
        "monk",
    ]);

    println!("Can I select Ninja class? {}", classes.contains("ninja"));
    println!("Can I select Warrior class? {}", classes.contains("warrior"));

    let ragnar = Viking{
        name: "Ragnar",
        age: 24,
    };

    ragnar.say_hellow();

    let _player = PlayerClass::Mage(Spell{
        name: "Firebolt",
        mana_cost: 30,
    });

    let mut player = Player{
        x: 100,
        y: 0,
    };

    player.move(10, 10);

    let int_wrapper = Wrapper{
        value: 15,
    };

    let str_wrapper = Wrapper{
        value: "Foo",
    };

    println!("wrapper_int: {:?}", int_wrapper.value);
    println!("wrapper_str: {:?}", str_wrapper.value);

    let mut x = 5;
    x = x + 1;

    println!("x: {}", x);
    myfunc(x);

    let nums = vec![1,2,3,4,5];
    let res = nums.iter()
        .map(transform)
        .filter(filter)
        .collect::<Vec<u32>>();

    println!("{:?}", res);

    println!("{}", pattern_match("Susan"));
    println!("{}", pattern_match("John"));

    let names = vec!["Ragnar", "Bjorn", "Floki"];
    let magic: Vec<i32> = vec![];

    let name: Option<&&str> = names.first();
    let magical: Option<&i32> = magic.first();

    if let Some(x) = name {
        println!("We have a name: {}", x)
    }

    match magical {
        Some(x) => println!("Magic level of: {}", x),
        None => println!("No magic"),
    };

    let viking_names_res = File::open("asgard.txt");

    let viking_names = match viking_names_res {
        Ok(file) => file,
        Err(error) => panic!("Problem opening the file: {:?}", error),
    };
    
    println!("{:?}", viking_names);

    let the_player = player::Player::new();
    let mygame = game::Game::new(the_player);

    mygame.start();

    let name = "anna".to_string();
    let is_palin = is_palindrome(&name);

    if is_palin {
        println!("{} is a palindrome", name)
    } else {
        println!("{} is not a palindrome", name)
    }
}

