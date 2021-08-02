// 自動生成されたコードです。変更しないでください。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "レベル1":
            case "レベル1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000606000000000001010101010101000006060606060600010303030303010000000000000000000103030303030100010101010101000001030303030301000104040303010000010303030303010001030303030100000103030303030100010105050101000001010303030101000000020200000000000002020200000002020202020202020202020202000000000002000000000000000000000000000001030101010000000000000000000000010303030100000000000000000000000103030301000000000000000000000001010101010000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 2 2 2 2 . 
. . . . . . . . 2 . . . . . 2 . 
. . . . . . . . 2 . . . . . 2 . 
2 2 2 2 2 2 . . 2 . . . . . 2 . 
2 . . . . 2 . . 2 . . . . . 2 . 
2 . . . . 2 . . 2 . . . . . 2 . 
2 2 2 2 2 2 . . 2 2 . . . 2 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 . 2 2 2 . . . . . . . . . . 
. 2 . . . 2 . . . . . . . . . . 
. 2 . . . 2 . . . . . . . . . . 
. 2 2 2 2 2 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.swamp.swampTile16,sprites.swamp.swampTile9,sprites.dungeon.chestOpen,sprites.dungeon.stairLadder,sprites.swamp.swampTile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// 自動生成されたコードです。変更しないでください。
