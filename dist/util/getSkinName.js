"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSunfishAA = exports.getSkinName = void 0;
exports.getSkinName = () => {
    const skins = [
        'プールパーティー',
        'プロジェクト',
        'チャレンジャー',
        '覇者',
        'ヘクステック',
        'コマンドー',
        '荒野の',
        'これじゃない',
        '勝利の栄光'
    ];
    const num = Math.floor(Math.random() * skins.length);
    return skins[num];
};
exports.getSunfishAA = () => {
    const sunfishs = [
        [
            '.　　　　　　　　　　　　/^i',
            '.　　　　　　　　　　　  /:::::|',
            '.　　　　　　　　　 ＿＿/::::::::|',
            '.　 　 　 　 ,. ‐’ ´::::::::::::::::::::::::::ヽ:.､',
            '.　　　, ‐’´:::::::::::::::::::::::::::::::::::::::::::ヽ:＼',
            '.　　（:::(ｏ):::::::／i:::::::::::::::::::::::::::::::::i::::::i',
            '.　　 ヽ　　　　￣ :::::::::::::::::::::::::::::|::::::l',
            '.　　　 ＼　　　　　   ::::::::::::::::::ｉ::::::i',
            '.　　　　　`‐ ､　　　　　　 ::::::/::／',
            '.　　　 　 　 　 ｀ ー– ､…….::／ ‘´',
            '.　　　　　　　　 　 　i:::::::|',
            '.　 　 　 　 　 　 　 　  i:::::::!',
            '.　　　　　　　　　　　ヽ:_|'
        ],
        [
            '.          　　 _',
            '.          　　｜ヽ＿＿',
            '.          　 _/　　　 ＼',
            '.          　(ﾐ 　　 ◎ -ヽ',
            '.     　     (ﾐ　(三 (ﾟдﾟ)',
            '.     　     (ﾐ 　　(ﾉ　 /)',
            '.     　      ~＼　＿＿／',
            '.     　　     　L/∪∪',
        ],
        [
            '.               ／ﾍﾉ＼',
            '.             /  ＠      |',
            '.             |  ¨ ¨   |',
            '.           ／__ﾆﾆﾆﾆ_ ＼',
        ],
        [
            '.              ∩',
            '.              ||＿､',
            '.          ／　　 ￣￣\\',
            '.          |　　　∈ ゜《',
            '.          ( 　　　　　 ﾉ',
            '.          |　　　＿＿ノ',
            '.          `∪/| 　||',
            '.          ﾉﾉ| 　||',
            '.          ” | ∩|”',
            '.          ＿// ||＿､',
            '.          ∠＿_| |＿＿＞',
        ],
        [
            'う〜　　　　　  　∧',
            'マンボウ！　　　 /  |',
            '. 　　　　　　　/　 |',
            '.         　.-･” ”￣ ￣　　　ヽ',
            '.     ／　　　　　　　　三\\',
            '.     ₎　o　/三　　　　 　三|',
            '.     ヽ　　￣　　　　　 三/',
            '.         “･- ., _　　　　　ノ',
            '.              　    　￣￣\\　 |',
            '. 　　　　　　　   \\　|',
            '.　　　　　　　　  V',
        ]
    ];
    const num = Math.floor(Math.random() * sunfishs.length);
    return sunfishs[num];
};
