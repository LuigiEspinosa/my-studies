pub struct Player {
    health: u64,
}

impl Player {
    pub fn new() -> Player{
        return Player{}
    }

    pub fn play(&self) {
    }

    pub fn take_damage(&mut self, damage: u64) {
        if damage > self.health {
            self.health = 0
        } else {
            self.health -= damage
        }
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_take_damage() {
        let mut player = Player{health: 100};
        player.take_damage(50);

        assert_eq!(player.health, 50);
    }
}
