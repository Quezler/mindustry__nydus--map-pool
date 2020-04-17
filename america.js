for(int x = 0; x < world.width(); x++){
    for(int y = 0; y < world.height(); y++){
        Tile t = world.tile(x, y);
        if(t.block == Blocks.air) t.setFloor(Blocks.tar);
    }
}
