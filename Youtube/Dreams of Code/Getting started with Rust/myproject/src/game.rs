use create::player;

pub struct Game {
    player: player::Player
}

impl Game {
    pub fn new(player: player::Player) -> Game {
        return Game{
            player
        }
    }

    pub fn start(self) {
        self.player.play();
    }
}

