const EMBLEM_COLOR_IDS_ORDERED = [443, 673, 27, 584, 473, 617, 4, 125, 71, 112, 376, 146, 64, 132, 340, 130, 137, 136, 93, 9, 11, 121, 139, 48, 114, 47];

// Result of request to the following URL on the official GW2 API:
// https://api.guildwars2.com/v2/colors?lang=en&ids=443,673,27,584,473,617,4,125,71,112,376,146,64,132,340,130,137,136,93,9,11,121,139,48,114,47,349

const EMBLEM_COLORS = [
    {
      "id": 443,
      "name": "White",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": 45,
        "contrast": 1.44531,
        "hue": 10,
        "saturation": 0.0234375,
        "lightness": 1.5625,
        "rgb": [
          189,
          186,
          185
        ]
      },
      "leather": {
        "brightness": 47,
        "contrast": 1.44531,
        "hue": 10,
        "saturation": 0.0234375,
        "lightness": 1.5625,
        "rgb": [
          195,
          192,
          191
        ]
      },
      "metal": {
        "brightness": 47,
        "contrast": 1.91406,
        "hue": 10,
        "saturation": 0.0234375,
        "lightness": 1.83594,
        "rgb": [
          171,
          167,
          166
        ]
      },
      "fur": {
        "brightness": 45,
        "contrast": 1.44531,
        "hue": 10,
        "saturation": 0.0234375,
        "lightness": 1.5625,
        "rgb": [
          189,
          186,
          185
        ]
      },
      "item": 20582,
      "categories": [
        "Gray",
        "Metal",
        "Rare"
      ]
    },
    {
      "id": 673,
      "name": "Red",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": -3,
        "contrast": 1.0625,
        "hue": 356,
        "saturation": 1.21094,
        "lightness": 0.976563,
        "rgb": [
          135,
          0,
          10
        ]
      },
      "leather": {
        "brightness": -3,
        "contrast": 1.0625,
        "hue": 356,
        "saturation": 0.859375,
        "lightness": 1.09375,
        "rgb": [
          116,
          19,
          27
        ]
      },
      "metal": {
        "brightness": 7,
        "contrast": 1.28906,
        "hue": 356,
        "saturation": 1.09375,
        "lightness": 1.09375,
        "rgb": [
          155,
          5,
          17
        ]
      },
      "fur": {
        "brightness": -3,
        "contrast": 1.0625,
        "hue": 356,
        "saturation": 1.21094,
        "lightness": 0.976563,
        "rgb": [
          135,
          0,
          10
        ]
      },
      "item": 20714,
      "categories": [
        "Red",
        "Vibrant",
        "Common"
      ]
    },
    {
      "id": 27,
      "name": "Blueberry",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": 6,
        "contrast": 1.05469,
        "hue": 220,
        "saturation": 0.703125,
        "lightness": 1.09375,
        "rgb": [
          36,
          65,
          122
        ]
      },
      "leather": {
        "brightness": 6,
        "contrast": 1.09375,
        "hue": 215,
        "saturation": 0.625,
        "lightness": 1.09375,
        "rgb": [
          33,
          67,
          113
        ]
      },
      "metal": {
        "brightness": 6,
        "contrast": 1.09375,
        "hue": 215,
        "saturation": 0.507813,
        "lightness": 1.09375,
        "rgb": [
          40,
          68,
          106
        ]
      },
      "fur": {
        "brightness": 6,
        "contrast": 1.05469,
        "hue": 220,
        "saturation": 0.703125,
        "lightness": 1.09375,
        "rgb": [
          36,
          65,
          122
        ]
      },
      "item": 20418,
      "categories": [
        "Blue",
        "Vibrant",
        "Uncommon"
      ]
    },
    {
      "id": 584,
      "name": "Ancient Silver",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": 42,
        "contrast": 1.5625,
        "hue": 42,
        "saturation": 0.273438,
        "lightness": 1.28906,
        "rgb": [
          157,
          142,
          108
        ]
      },
      "leather": {
        "brightness": 42,
        "contrast": 1.5625,
        "hue": 42,
        "saturation": 0.273438,
        "lightness": 1.28906,
        "rgb": [
          157,
          142,
          108
        ]
      },
      "metal": {
        "brightness": 27,
        "contrast": 1.5625,
        "hue": 42,
        "saturation": 0.273438,
        "lightness": 1.5625,
        "rgb": [
          139,
          124,
          90
        ]
      },
      "fur": {
        "brightness": 42,
        "contrast": 1.5625,
        "hue": 42,
        "saturation": 0.273438,
        "lightness": 1.28906,
        "rgb": [
          157,
          142,
          108
        ]
      },
      "item": 20647,
      "categories": [
        "Yellow",
        "Vibrant",
        "Rare"
      ]
    },
    {
      "id": 473,
      "name": "Abyss",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": -18,
        "contrast": 1,
        "hue": 275,
        "saturation": 0.0234375,
        "lightness": 1.09375,
        "rgb": [
          26,
          24,
          27
        ]
      },
      "leather": {
        "brightness": -18,
        "contrast": 1,
        "hue": 275,
        "saturation": 0.0234375,
        "lightness": 1.09375,
        "rgb": [
          26,
          24,
          27
        ]
      },
      "metal": {
        "brightness": -23,
        "contrast": 1,
        "hue": 275,
        "saturation": 0,
        "lightness": 1.09375,
        "rgb": [
          15,
          15,
          15
        ]
      },
      "fur": {
        "brightness": -18,
        "contrast": 1,
        "hue": 275,
        "saturation": 0.0234375,
        "lightness": 1.09375,
        "rgb": [
          26,
          24,
          27
        ]
      },
      "item": 20356,
      "categories": [
        "Gray",
        "Metal",
        "Rare"
      ]
    },
    {
      "id": 617,
      "name": "Green",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": -2,
        "contrast": 1,
        "hue": 135,
        "saturation": 0.546875,
        "lightness": 0.976563,
        "rgb": [
          28,
          90,
          45
        ]
      },
      "leather": {
        "brightness": -2,
        "contrast": 1,
        "hue": 135,
        "saturation": 0.46875,
        "lightness": 0.976563,
        "rgb": [
          32,
          85,
          46
        ]
      },
      "metal": {
        "brightness": -2,
        "contrast": 1,
        "hue": 135,
        "saturation": 0.390625,
        "lightness": 0.976563,
        "rgb": [
          35,
          80,
          47
        ]
      },
      "fur": {
        "brightness": -2,
        "contrast": 1,
        "hue": 135,
        "saturation": 0.546875,
        "lightness": 0.976563,
        "rgb": [
          28,
          90,
          45
        ]
      },
      "item": 20679,
      "categories": [
        "Green",
        "Vibrant",
        "Common"
      ]
    },
    {
      "id": 4,
      "name": "Gray",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": 3,
        "contrast": 1.05469,
        "hue": 340,
        "saturation": 0.0234375,
        "lightness": 1.13281,
        "rgb": [
          72,
          69,
          70
        ]
      },
      "leather": {
        "brightness": 3,
        "contrast": 1.05469,
        "hue": 340,
        "saturation": 0.0234375,
        "lightness": 1.13281,
        "rgb": [
          72,
          69,
          70
        ]
      },
      "metal": {
        "brightness": 5,
        "contrast": 1.28906,
        "hue": 340,
        "saturation": 0.0234375,
        "lightness": 1.28906,
        "rgb": [
          66,
          63,
          64
        ]
      },
      "fur": {
        "brightness": 3,
        "contrast": 1.05469,
        "hue": 340,
        "saturation": 0.0234375,
        "lightness": 1.13281,
        "rgb": [
          72,
          69,
          70
        ]
      },
      "item": 20363,
      "categories": [
        "Gray",
        "Metal",
        "Common"
      ]
    },
    {
      "id": 125,
      "name": "Fuchsia",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": -2,
        "contrast": 1,
        "hue": 333,
        "saturation": 0.78125,
        "lightness": 1.25,
        "rgb": [
          117,
          25,
          67
        ]
      },
      "leather": {
        "brightness": -2,
        "contrast": 1,
        "hue": 333,
        "saturation": 0.664063,
        "lightness": 1.25,
        "rgb": [
          110,
          32,
          67
        ]
      },
      "metal": {
        "brightness": -2,
        "contrast": 1,
        "hue": 333,
        "saturation": 0.546875,
        "lightness": 1.25,
        "rgb": [
          103,
          38,
          68
        ]
      },
      "fur": {
        "brightness": -2,
        "contrast": 1,
        "hue": 333,
        "saturation": 0.78125,
        "lightness": 1.25,
        "rgb": [
          117,
          25,
          67
        ]
      },
      "item": 20538,
      "categories": [
        "Red",
        "Vibrant",
        "Uncommon"
      ]
    },
    {
      "id": 71,
      "name": "Oxblood",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": -23,
        "contrast": 1,
        "hue": 13,
        "saturation": 0.585938,
        "lightness": 1.17188,
        "rgb": [
          55,
          4,
          0
        ]
      },
      "leather": {
        "brightness": -20,
        "contrast": 1,
        "hue": 13,
        "saturation": 0.507813,
        "lightness": 1.17188,
        "rgb": [
          57,
          13,
          0
        ]
      },
      "metal": {
        "brightness": -23,
        "contrast": 1.17188,
        "hue": 20,
        "saturation": 0.703125,
        "lightness": 1.21094,
        "rgb": [
          55,
          0,
          0
        ]
      },
      "fur": {
        "brightness": -23,
        "contrast": 1,
        "hue": 13,
        "saturation": 0.585938,
        "lightness": 1.17188,
        "rgb": [
          55,
          4,
          0
        ]
      },
      "item": 20427,
      "categories": [
        "Red",
        "Metal",
        "Rare"
      ]
    },
    {
      "id": 112,
      "name": "Orange",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": 15,
        "contrast": 1.25,
        "hue": 18,
        "saturation": 0.898438,
        "lightness": 1.09375,
        "rgb": [
          152,
          63,
          23
        ]
      },
      "leather": {
        "brightness": 12,
        "contrast": 1.25,
        "hue": 18,
        "saturation": 0.859375,
        "lightness": 1.09375,
        "rgb": [
          142,
          58,
          18
        ]
      },
      "metal": {
        "brightness": 15,
        "contrast": 1.32813,
        "hue": 18,
        "saturation": 0.820313,
        "lightness": 1.09375,
        "rgb": [
          144,
          58,
          18
        ]
      },
      "fur": {
        "brightness": 15,
        "contrast": 1.25,
        "hue": 18,
        "saturation": 0.898438,
        "lightness": 1.09375,
        "rgb": [
          152,
          63,
          23
        ]
      },
      "item": 20534,
      "categories": [
        "Orange",
        "Vibrant",
        "Uncommon"
      ]
    },
    {
      "id": 376,
      "name": "Salmon",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": 7,
        "contrast": 1.17188,
        "hue": 5,
        "saturation": 0.859375,
        "lightness": 1.05469,
        "rgb": [
          133,
          36,
          26
        ]
      },
      "leather": {
        "brightness": 7,
        "contrast": 1.17188,
        "hue": 5,
        "saturation": 0.78125,
        "lightness": 1.05469,
        "rgb": [
          127,
          39,
          30
        ]
      },
      "metal": {
        "brightness": 7,
        "contrast": 1.25,
        "hue": 5,
        "saturation": 0.703125,
        "lightness": 1.17188,
        "rgb": [
          126,
          41,
          32
        ]
      },
      "fur": {
        "brightness": 7,
        "contrast": 1.17188,
        "hue": 5,
        "saturation": 0.859375,
        "lightness": 1.05469,
        "rgb": [
          133,
          36,
          26
        ]
      },
      "categories": [
        "Orange",
        "Vibrant",
        "Starter"
      ]
    },
    {
      "id": 146,
      "name": "Harvest Gold",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": -3,
        "contrast": 1,
        "hue": 45,
        "saturation": 1.71875,
        "lightness": 1.01563,
        "rgb": [
          137,
          85,
          0
        ]
      },
      "leather": {
        "brightness": -5,
        "contrast": 1,
        "hue": 45,
        "saturation": 1.5625,
        "lightness": 1.01563,
        "rgb": [
          125,
          78,
          0
        ]
      },
      "metal": {
        "brightness": -3,
        "contrast": 1.09375,
        "hue": 40,
        "saturation": 1.5625,
        "lightness": 1.13281,
        "rgb": [
          142,
          74,
          0
        ]
      },
      "fur": {
        "brightness": -3,
        "contrast": 1,
        "hue": 45,
        "saturation": 1.71875,
        "lightness": 1.01563,
        "rgb": [
          137,
          85,
          0
        ]
      },
      "item": 20609,
      "categories": [
        "Yellow",
        "Vibrant",
        "Uncommon"
      ]
    },
    {
      "id": 64,
      "name": "Brass",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": 2,
        "contrast": 1.11719,
        "hue": 36,
        "saturation": 0.742188,
        "lightness": 1.21094,
        "rgb": [
          113,
          73,
          16
        ]
      },
      "leather": {
        "brightness": -2,
        "contrast": 1,
        "hue": 36,
        "saturation": 0.742188,
        "lightness": 1.21094,
        "rgb": [
          108,
          73,
          21
        ]
      },
      "metal": {
        "brightness": 8,
        "contrast": 1.40625,
        "hue": 36,
        "saturation": 0.78125,
        "lightness": 1.40625,
        "rgb": [
          128,
          75,
          0
        ]
      },
      "fur": {
        "brightness": 2,
        "contrast": 1.11719,
        "hue": 36,
        "saturation": 0.742188,
        "lightness": 1.21094,
        "rgb": [
          113,
          73,
          16
        ]
      },
      "item": 20477,
      "categories": [
        "Yellow",
        "Metal",
        "Common"
      ]
    },
    {
      "id": 132,
      "name": "Lime",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": -13,
        "contrast": 1,
        "hue": 85,
        "saturation": 0.898438,
        "lightness": 0.898438,
        "rgb": [
          35,
          80,
          0
        ]
      },
      "leather": {
        "brightness": -13,
        "contrast": 1,
        "hue": 85,
        "saturation": 0.664063,
        "lightness": 0.9375,
        "rgb": [
          35,
          68,
          0
        ]
      },
      "metal": {
        "brightness": -12,
        "contrast": 1,
        "hue": 85,
        "saturation": 0.585938,
        "lightness": 0.976563,
        "rgb": [
          38,
          67,
          0
        ]
      },
      "fur": {
        "brightness": -13,
        "contrast": 1,
        "hue": 85,
        "saturation": 0.898438,
        "lightness": 0.898438,
        "rgb": [
          35,
          80,
          0
        ]
      },
      "item": 20511,
      "categories": [
        "Green",
        "Vibrant",
        "Uncommon"
      ]
    },
    {
      "id": 340,
      "name": "Khaki",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": -18,
        "contrast": 1,
        "hue": 56,
        "saturation": 1.5625,
        "lightness": 0.9375,
        "rgb": [
          81,
          69,
          0
        ]
      },
      "leather": {
        "brightness": -15,
        "contrast": 1,
        "hue": 56,
        "saturation": 1.44531,
        "lightness": 0.9375,
        "rgb": [
          83,
          71,
          0
        ]
      },
      "metal": {
        "brightness": -15,
        "contrast": 1.05469,
        "hue": 56,
        "saturation": 1.36719,
        "lightness": 0.9375,
        "rgb": [
          79,
          67,
          0
        ]
      },
      "fur": {
        "brightness": -18,
        "contrast": 1,
        "hue": 56,
        "saturation": 1.5625,
        "lightness": 0.9375,
        "rgb": [
          81,
          69,
          0
        ]
      },
      "item": 20521,
      "categories": [
        "Brown",
        "Metal",
        "Common"
      ]
    },
    {
      "id": 130,
      "name": "Evergreen",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": -28,
        "contrast": 1,
        "hue": 68,
        "saturation": 0.859375,
        "lightness": 0.78125,
        "rgb": [
          25,
          39,
          0
        ]
      },
      "leather": {
        "brightness": -23,
        "contrast": 1,
        "hue": 80,
        "saturation": 0.703125,
        "lightness": 0.9375,
        "rgb": [
          21,
          49,
          0
        ]
      },
      "metal": {
        "brightness": -24,
        "contrast": 1,
        "hue": 80,
        "saturation": 0.585938,
        "lightness": 0.9375,
        "rgb": [
          18,
          41,
          0
        ]
      },
      "fur": {
        "brightness": -28,
        "contrast": 1,
        "hue": 68,
        "saturation": 0.859375,
        "lightness": 0.78125,
        "rgb": [
          25,
          39,
          0
        ]
      },
      "item": 20539,
      "categories": [
        "Green",
        "Vibrant",
        "Uncommon"
      ]
    },
    {
      "id": 137,
      "name": "Turquoise",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": 0,
        "contrast": 1.05469,
        "hue": 180,
        "saturation": 1.36719,
        "lightness": 1.05469,
        "rgb": [
          0,
          108,
          108
        ]
      },
      "leather": {
        "brightness": 0,
        "contrast": 1.05469,
        "hue": 180,
        "saturation": 1.05469,
        "lightness": 1.05469,
        "rgb": [
          0,
          97,
          97
        ]
      },
      "metal": {
        "brightness": 0,
        "contrast": 1.05469,
        "hue": 180,
        "saturation": 0.664063,
        "lightness": 1.13281,
        "rgb": [
          16,
          87,
          87
        ]
      },
      "fur": {
        "brightness": 0,
        "contrast": 1.05469,
        "hue": 180,
        "saturation": 1.36719,
        "lightness": 1.05469,
        "rgb": [
          0,
          108,
          108
        ]
      },
      "item": 20602,
      "categories": [
        "Blue",
        "Vibrant",
        "Rare"
      ]
    },
    {
      "id": 136,
      "name": "Spruce",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": -8,
        "contrast": 1,
        "hue": 175,
        "saturation": 0.703125,
        "lightness": 0.664063,
        "rgb": [
          0,
          56,
          49
        ]
      },
      "leather": {
        "brightness": -8,
        "contrast": 1,
        "hue": 175,
        "saturation": 0.585938,
        "lightness": 0.78125,
        "rgb": [
          0,
          57,
          51
        ]
      },
      "metal": {
        "brightness": -8,
        "contrast": 1,
        "hue": 175,
        "saturation": 0.585938,
        "lightness": 0.78125,
        "rgb": [
          0,
          57,
          51
        ]
      },
      "fur": {
        "brightness": -8,
        "contrast": 1,
        "hue": 175,
        "saturation": 0.703125,
        "lightness": 0.664063,
        "rgb": [
          0,
          56,
          49
        ]
      },
      "item": 20542,
      "categories": [
        "Blue",
        "Vibrant",
        "Common"
      ]
    },
    {
      "id": 93,
      "name": "Frost",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": 14,
        "contrast": 1.25,
        "hue": 190,
        "saturation": 0.101563,
        "lightness": 1.875,
        "rgb": [
          124,
          136,
          138
        ]
      },
      "leather": {
        "brightness": 16,
        "contrast": 1.25,
        "hue": 180,
        "saturation": 0.101563,
        "lightness": 1.875,
        "rgb": [
          131,
          144,
          144
        ]
      },
      "metal": {
        "brightness": 16,
        "contrast": 1.25,
        "hue": 180,
        "saturation": 0.101563,
        "lightness": 1.875,
        "rgb": [
          131,
          144,
          144
        ]
      },
      "fur": {
        "brightness": 14,
        "contrast": 1.25,
        "hue": 190,
        "saturation": 0.101563,
        "lightness": 1.875,
        "rgb": [
          124,
          136,
          138
        ]
      },
      "item": 20565,
      "categories": [
        "Gray",
        "Metal",
        "Rare"
      ]
    },
    {
      "id": 9,
      "name": "Blue Rose",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": -5,
        "contrast": 1,
        "hue": 192,
        "saturation": 1.32813,
        "lightness": 0.976563,
        "rgb": [
          0,
          76,
          109
        ]
      },
      "leather": {
        "brightness": -6,
        "contrast": 1,
        "hue": 192,
        "saturation": 1.13281,
        "lightness": 1.05469,
        "rgb": [
          0,
          74,
          102
        ]
      },
      "metal": {
        "brightness": -5,
        "contrast": 1,
        "hue": 192,
        "saturation": 0.859375,
        "lightness": 1.05469,
        "rgb": [
          0,
          70,
          91
        ]
      },
      "fur": {
        "brightness": -5,
        "contrast": 1,
        "hue": 192,
        "saturation": 1.32813,
        "lightness": 0.976563,
        "rgb": [
          0,
          76,
          109
        ]
      },
      "item": 20367,
      "categories": [
        "Blue",
        "Vibrant",
        "Uncommon"
      ]
    },
    {
      "id": 11,
      "name": "Starry Night",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": -30,
        "contrast": 1,
        "hue": 188,
        "saturation": 1.25,
        "lightness": 0.625,
        "rgb": [
          0,
          31,
          52
        ]
      },
      "leather": {
        "brightness": -25,
        "contrast": 1,
        "hue": 188,
        "saturation": 1.05469,
        "lightness": 0.78125,
        "rgb": [
          0,
          34,
          51
        ]
      },
      "metal": {
        "brightness": -30,
        "contrast": 1,
        "hue": 188,
        "saturation": 0.78125,
        "lightness": 0.625,
        "rgb": [
          0,
          19,
          32
        ]
      },
      "fur": {
        "brightness": -30,
        "contrast": 1,
        "hue": 188,
        "saturation": 1.25,
        "lightness": 0.625,
        "rgb": [
          0,
          31,
          52
        ]
      },
      "item": 20369,
      "categories": [
        "Blue",
        "Vibrant",
        "Rare"
      ]
    },
    {
      "id": 121,
      "name": "Pink",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": 27,
        "contrast": 1.28906,
        "hue": 355,
        "saturation": 0.703125,
        "lightness": 1.40625,
        "rgb": [
          194,
          97,
          106
        ]
      },
      "leather": {
        "brightness": 32,
        "contrast": 1.36719,
        "hue": 355,
        "saturation": 0.664063,
        "lightness": 1.52344,
        "rgb": [
          212,
          115,
          124
        ]
      },
      "metal": {
        "brightness": 22,
        "contrast": 1.32813,
        "hue": 355,
        "saturation": 0.78125,
        "lightness": 1.40625,
        "rgb": [
          185,
          74,
          85
        ]
      },
      "fur": {
        "brightness": 27,
        "contrast": 1.28906,
        "hue": 355,
        "saturation": 0.703125,
        "lightness": 1.40625,
        "rgb": [
          194,
          97,
          106
        ]
      },
      "item": 20537,
      "categories": [
        "Red",
        "Vibrant",
        "Uncommon"
      ]
    },
    {
      "id": 139,
      "name": "Violet",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": 4,
        "contrast": 1,
        "hue": 240,
        "saturation": 0.625,
        "lightness": 1.09375,
        "rgb": [
          53,
          53,
          116
        ]
      },
      "leather": {
        "brightness": 4,
        "contrast": 1,
        "hue": 240,
        "saturation": 0.585938,
        "lightness": 1.09375,
        "rgb": [
          54,
          54,
          114
        ]
      },
      "metal": {
        "brightness": 4,
        "contrast": 1,
        "hue": 240,
        "saturation": 0.46875,
        "lightness": 1.09375,
        "rgb": [
          58,
          58,
          106
        ]
      },
      "fur": {
        "brightness": 4,
        "contrast": 1,
        "hue": 240,
        "saturation": 0.625,
        "lightness": 1.09375,
        "rgb": [
          53,
          53,
          116
        ]
      },
      "item": 20603,
      "categories": [
        "Purple",
        "Vibrant",
        "Common"
      ]
    },
    {
      "id": 48,
      "name": "Grape Gum",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": 0,
        "contrast": 1,
        "hue": 296,
        "saturation": 0.664063,
        "lightness": 1.25,
        "rgb": [
          94,
          29,
          100
        ]
      },
      "leather": {
        "brightness": 0,
        "contrast": 1,
        "hue": 296,
        "saturation": 0.507813,
        "lightness": 1.25,
        "rgb": [
          90,
          40,
          94
        ]
      },
      "metal": {
        "brightness": 0,
        "contrast": 1,
        "hue": 296,
        "saturation": 0.507813,
        "lightness": 1.25,
        "rgb": [
          90,
          40,
          94
        ]
      },
      "fur": {
        "brightness": 0,
        "contrast": 1,
        "hue": 296,
        "saturation": 0.664063,
        "lightness": 1.25,
        "rgb": [
          94,
          29,
          100
        ]
      },
      "item": 20498,
      "categories": [
        "Purple",
        "Vibrant",
        "Common"
      ]
    },
    {
      "id": 114,
      "name": "Grapevine",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": 2,
        "contrast": 1,
        "hue": 270,
        "saturation": 0.507813,
        "lightness": 1.09375,
        "rgb": [
          69,
          40,
          99
        ]
      },
      "leather": {
        "brightness": 2,
        "contrast": 1,
        "hue": 270,
        "saturation": 0.429688,
        "lightness": 1.09375,
        "rgb": [
          69,
          44,
          95
        ]
      },
      "metal": {
        "brightness": 2,
        "contrast": 1,
        "hue": 270,
        "saturation": 0.351563,
        "lightness": 1.09375,
        "rgb": [
          69,
          49,
          90
        ]
      },
      "fur": {
        "brightness": 2,
        "contrast": 1,
        "hue": 270,
        "saturation": 0.507813,
        "lightness": 1.09375,
        "rgb": [
          69,
          40,
          99
        ]
      },
      "item": 20588,
      "categories": [
        "Purple",
        "Vibrant",
        "Common"
      ]
    },
    {
      "id": 47,
      "name": "Grape",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": -3,
        "contrast": 1,
        "hue": 305,
        "saturation": 0.507813,
        "lightness": 0.9375,
        "rgb": [
          70,
          16,
          65
        ]
      },
      "leather": {
        "brightness": -3,
        "contrast": 1,
        "hue": 305,
        "saturation": 0.390625,
        "lightness": 0.9375,
        "rgb": [
          65,
          24,
          61
        ]
      },
      "metal": {
        "brightness": -3,
        "contrast": 1,
        "hue": 305,
        "saturation": 0.351563,
        "lightness": 0.9375,
        "rgb": [
          64,
          26,
          60
        ]
      },
      "fur": {
        "brightness": -3,
        "contrast": 1,
        "hue": 305,
        "saturation": 0.507813,
        "lightness": 0.9375,
        "rgb": [
          70,
          16,
          65
        ]
      },
      "item": 20606,
      "categories": [
        "Purple",
        "Vibrant",
        "Common"
      ]
    },
    {
      "id": 349,
      "name": "Dapple",
      "base_rgb": [
        128,
        26,
        26
      ],
      "cloth": {
        "brightness": 12,
        "contrast": 1.25,
        "hue": 190,
        "saturation": 0.335938,
        "lightness": 1.99219,
        "rgb": [
          105,
          143,
          151
        ]
      },
      "leather": {
        "brightness": 17,
        "contrast": 1.25,
        "hue": 190,
        "saturation": 0.3125,
        "lightness": 1.75781,
        "rgb": [
          109,
          144,
          152
        ]
      },
      "metal": {
        "brightness": 25,
        "contrast": 1.44531,
        "hue": 190,
        "saturation": 0.3125,
        "lightness": 1.75781,
        "rgb": [
          109,
          150,
          159
        ]
      },
      "fur": {
        "brightness": 12,
        "contrast": 1.25,
        "hue": 190,
        "saturation": 0.335938,
        "lightness": 1.99219,
        "rgb": [
          105,
          143,
          151
        ]
      },
      "item": 20380,
      "categories": [
        "Blue",
        "Vibrant",
        "Rare"
      ]
    }
  ];