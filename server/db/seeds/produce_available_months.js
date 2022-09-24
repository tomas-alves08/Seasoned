/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('produce_available_months').del()
  // January
  await knex('produce_available_months').insert([
    [
      { id: 1, month: '1', produce_id: '2' },
      { id: 2, month: '1', produce_id: '3' },
      { id: 3, month: '1', produce_id: '42' },
      { id: 4, month: '1', produce_id: '43' },
      { id: 5, month: '1', produce_id: '5' },
      { id: 6, month: '1', produce_id: '6' },
      { id: 7, month: '1', produce_id: '7' },
      { id: 8, month: '1', produce_id: '8' },
      { id: 9, month: '1', produce_id: '47' },
      { id: 10, month: '1', produce_id: '48' },
      { id: 11, month: '1', produce_id: '50' },
      { id: 12, month: '1', produce_id: '9' },
      { id: 13, month: '1', produce_id: '55' },
      { id: 14, month: '1', produce_id: '57' },
      { id: 15, month: '1', produce_id: '15' },
      { id: 16, month: '1', produce_id: '18' },
      { id: 17, month: '1', produce_id: '23' },
      { id: 18, month: '1', produce_id: '24' },
      { id: 19, month: '1', produce_id: '26' },
      { id: 20, month: '1', produce_id: '28' },
      { id: 21, month: '1', produce_id: '70' },
      { id: 22, month: '1', produce_id: '31' },
      { id: 23, month: '1', produce_id: '32' },
      { id: 24, month: '1', produce_id: '33' },
      { id: 25, month: '1', produce_id: '38' },
      { id: 26, month: '1', produce_id: '77' },
      { id: 27, month: '1', produce_id: '34' },
      { id: 28, month: '1', produce_id: '82' },
      { id: 29, month: '1', produce_id: '83' },
      { id: 30, month: '1', produce_id: '37' },
    ],
    [
      { id: 31, month: '2', produce_id: '1' },
      { id: 32, month: '2', produce_id: '2' },
      { id: 33, month: '2', produce_id: '3' },
      { id: 34, month: '2', produce_id: '42' },
      { id: 35, month: '2', produce_id: '43' },
      { id: 36, month: '2', produce_id: '5' },
      { id: 37, month: '2', produce_id: '6' },
      { id: 38, month: '2', produce_id: '7' },
      { id: 39, month: '2', produce_id: '47' },
      { id: 40, month: '2', produce_id: '48' },
      { id: 41, month: '2', produce_id: '50' },
      { id: 42, month: '2', produce_id: '55' },
      { id: 43, month: '2', produce_id: '57' },
      { id: 44, month: '2', produce_id: '13' },
      { id: 45, month: '2', produce_id: '14' },
      { id: 46, month: '2', produce_id: '15' },
      { id: 47, month: '2', produce_id: '23' },
      { id: 48, month: '2', produce_id: '24' },
      { id: 49, month: '2', produce_id: '26' },
      { id: 50, month: '2', produce_id: '69' },
      { id: 51, month: '2', produce_id: '27' },
      { id: 52, month: '2', produce_id: '28' },
      { id: 53, month: '2', produce_id: '29' },
      { id: 54, month: '2', produce_id: '70' },
      { id: 55, month: '2', produce_id: '31' },
      { id: 56, month: '2', produce_id: '38' },
      { id: 57, month: '2', produce_id: '77' },
      { id: 58, month: '2', produce_id: '34' },
      { id: 59, month: '2', produce_id: '81' },
      { id: 60, month: '2', produce_id: '82' },
      { id: 61, month: '2', produce_id: '83' },
      { id: 62, month: '2', produce_id: '37' },
    ],
    [
      { id: 63, month: '3', produce_id: '1' },
      { id: 64, month: '3', produce_id: '3' },
      { id: 65, month: '3', produce_id: '42' },
      { id: 66, month: '3', produce_id: '43' },
      { id: 67, month: '3', produce_id: '5' },
      { id: 68, month: '3', produce_id: '7' },
      { id: 69, month: '3', produce_id: '47' },
      { id: 70, month: '3', produce_id: '48' },
      { id: 71, month: '3', produce_id: '50' },
      { id: 72, month: '3', produce_id: '55' },
      { id: 73, month: '3', produce_id: '57' },
      { id: 74, month: '3', produce_id: '10' },
      { id: 75, month: '3', produce_id: '58' },
      { id: 76, month: '3', produce_id: '13' },
      { id: 77, month: '3', produce_id: '14' },
      { id: 78, month: '3', produce_id: '15' },
      { id: 79, month: '3', produce_id: '65' },
      { id: 80, month: '3', produce_id: '20' },
      { id: 81, month: '3', produce_id: '22' },
      { id: 82, month: '3', produce_id: '23' },
      { id: 83, month: '3', produce_id: '24' },
      { id: 84, month: '3', produce_id: '69' },
      { id: 85, month: '3', produce_id: '27' },
      { id: 86, month: '3', produce_id: '28' },
      { id: 87, month: '3', produce_id: '29' },
      { id: 88, month: '3', produce_id: '31' },
      { id: 89, month: '3', produce_id: '38' },
      { id: 90, month: '3', produce_id: '81' },
      { id: 91, month: '3', produce_id: '82' },
      { id: 92, month: '3', produce_id: '86' },
      { id: 93, month: '3', produce_id: '37' },
    ],
    [
      { id: 94, month: '4', produce_id: '1' },
      { id: 95, month: '4', produce_id: '3' },
      { id: 96, month: '4', produce_id: '42' },
      { id: 97, month: '4', produce_id: '43' },
      { id: 98, month: '4', produce_id: '7' },
      { id: 98, month: '4', produce_id: '47' },
      { id: 99, month: '4', produce_id: '48' },
      { id: 100, month: '4', produce_id: '50' },
      { id: 101, month: '4', produce_id: '54' },
      { id: 102, month: '4', produce_id: '55' },
      { id: 103, month: '4', produce_id: '57' },
      { id: 104, month: '4', produce_id: '10' },
      { id: 105, month: '4', produce_id: '58' },
      { id: 106, month: '4', produce_id: '16' },
      { id: 107, month: '4', produce_id: '17' },
      { id: 108, month: '4', produce_id: '18' },
      { id: 109, month: '4', produce_id: '65' },
      { id: 110, month: '4', produce_id: '20' },
      { id: 111, month: '4', produce_id: '22' },
      { id: 112, month: '4', produce_id: '23' },
      { id: 113, month: '4', produce_id: '69' },
      { id: 114, month: '4', produce_id: '27' },
      { id: 115, month: '4', produce_id: '29' },
      { id: 116, month: '4', produce_id: '81' },
      { id: 117, month: '4', produce_id: '82' },
      { id: 118, month: '4', produce_id: '86' },
    ],
    [
      { id: 119, month: '5', produce_id: '1' },
      { id: 120, month: '5', produce_id: '42' },
      { id: 121, month: '5', produce_id: '46' },
      { id: 122, month: '5', produce_id: '47' },
      { id: 123, month: '5', produce_id: '48' },
      { id: 124, month: '5', produce_id: '54' },
      { id: 125, month: '5', produce_id: '55' },
      { id: 126, month: '5', produce_id: '57' },
      { id: 127, month: '5', produce_id: '10' },
      { id: 128, month: '5', produce_id: '58' },
      { id: 129, month: '5', produce_id: '16' },
      { id: 130, month: '5', produce_id: '17' },
      { id: 131, month: '5', produce_id: '18' },
      { id: 132, month: '5', produce_id: '63' },
      { id: 133, month: '5', produce_id: '65' },
      { id: 134, month: '5', produce_id: '20' },
      { id: 135, month: '5', produce_id: '21' },
      { id: 136, month: '5', produce_id: '22' },
      { id: 137, month: '5', produce_id: '23' },
      { id: 138, month: '5', produce_id: '69' },
      { id: 139, month: '5', produce_id: '27' },
      { id: 140, month: '5', produce_id: '29' },
      { id: 141, month: '5', produce_id: '91' },
      { id: 142, month: '5', produce_id: '90' },
      { id: 143, month: '5', produce_id: '81' },
      { id: 144, month: '5', produce_id: '86' },
      { id: 145, month: '5', produce_id: '87' },
      { id: 146, month: '5', produce_id: '88' },
    ],
    [
      { id: 147, month: '6', produce_id: '40' },
      { id: 148, month: '6', produce_id: '46' },
      { id: 149, month: '6', produce_id: '47' },
      { id: 150, month: '6', produce_id: '48' },
      { id: 151, month: '6', produce_id: '54' },
      { id: 152, month: '6', produce_id: '57' },
      { id: 153, month: '6', produce_id: '10' },
      { id: 153, month: '6', produce_id: '58' },
      { id: 154, month: '6', produce_id: '12' },
      { id: 155, month: '6', produce_id: '16' },
      { id: 156, month: '6', produce_id: '17' },
      { id: 157, month: '6', produce_id: '18' },
      { id: 158, month: '6', produce_id: '63' },
      { id: 159, month: '6', produce_id: '65' },
      { id: 160, month: '6', produce_id: '19' },
      { id: 161, month: '6', produce_id: '20' },
      { id: 162, month: '6', produce_id: '21' },
      { id: 163, month: '6', produce_id: '22' },
      { id: 164, month: '6', produce_id: '23' },
      { id: 165, month: '6', produce_id: '25' },
      { id: 166, month: '6', produce_id: '69' },
      { id: 167, month: '6', produce_id: '27' },
      { id: 168, month: '6', produce_id: '91' },
      { id: 169, month: '6', produce_id: '90' },
      { id: 170, month: '6', produce_id: '81' },
      { id: 171, month: '6', produce_id: '86' },
      { id: 172, month: '6', produce_id: '87' },
      { id: 173, month: '6', produce_id: '88' },
      { id: 174, month: '6', produce_id: '89' },
    ],
    [
      { id: 175, month: '7', produce_id: '40' },
      { id: 176, month: '7', produce_id: '3' },
      { id: 177, month: '7', produce_id: '46' },
      { id: 178, month: '7', produce_id: '58' },
      { id: 179, month: '7', produce_id: '12' },
      { id: 180, month: '7', produce_id: '16' },
      { id: 181, month: '7', produce_id: '17' },
      { id: 182, month: '7', produce_id: '18' },
      { id: 183, month: '7', produce_id: '63' },
      { id: 183, month: '7', produce_id: '65' },
      { id: 184, month: '7', produce_id: '19' },
      { id: 185, month: '7', produce_id: '20' },
      { id: 186, month: '7', produce_id: '21' },
      { id: 187, month: '7', produce_id: '22' },
      { id: 188, month: '7', produce_id: '25' },
      { id: 189, month: '7', produce_id: '69' },
      { id: 190, month: '7', produce_id: '27' },
      { id: 191, month: '7', produce_id: '90' },
      { id: 192, month: '7', produce_id: '81' },
      { id: 193, month: '7', produce_id: '35' },
      { id: 194, month: '7', produce_id: '86' },
      { id: 195, month: '7', produce_id: '87' },
      { id: 196, month: '7', produce_id: '88' },
      { id: 197, month: '7', produce_id: '89' },
    ],
    [
      { id: 198, month: '8', produce_id: '40' },
      { id: 199, month: '8', produce_id: '3' },
      { id: 200, month: '8', produce_id: '46' },
      { id: 201, month: '8', produce_id: '58' },
      { id: 202, month: '8', produce_id: '12' },
      { id: 203, month: '8', produce_id: '16' },
      { id: 204, month: '8', produce_id: '17' },
      { id: 205, month: '8', produce_id: '18' },
      { id: 206, month: '8', produce_id: '63' },
      { id: 207, month: '8', produce_id: '65' },
      { id: 208, month: '8', produce_id: '19' },
      { id: 209, month: '8', produce_id: '20' },
      { id: 210, month: '8', produce_id: '22' },
      { id: 211, month: '8', produce_id: '25' },
      { id: 212, month: '8', produce_id: '69' },
      { id: 213, month: '8', produce_id: '90' },
      { id: 214, month: '8', produce_id: '81' },
      { id: 215, month: '8', produce_id: '35' },
      { id: 216, month: '8', produce_id: '87' },
      { id: 217, month: '8', produce_id: '88' },
      { id: 218, month: '8', produce_id: '89' },
    ],
    [
      { id: 219, month: '9', produce_id: '40' },
      { id: 220, month: '9', produce_id: '41' },
      { id: 221, month: '9', produce_id: '3' },
      { id: 222, month: '9', produce_id: '46' },
      { id: 223, month: '9', produce_id: '12' },
      { id: 224, month: '9', produce_id: '16' },
      { id: 225, month: '9', produce_id: '17' },
      { id: 226, month: '9', produce_id: '18' },
      { id: 227, month: '9', produce_id: '65' },
      { id: 228, month: '9', produce_id: '19' },
      { id: 229, month: '9', produce_id: '22' },
      { id: 230, month: '9', produce_id: '25' },
      { id: 231, month: '9', produce_id: '69' },
      { id: 232, month: '9', produce_id: '90' },
      { id: 233, month: '9', produce_id: '81' },
      { id: 234, month: '9', produce_id: '36' },
      { id: 235, month: '9', produce_id: '87' },
      { id: 236, month: '9', produce_id: '88' },
      { id: 237, month: '9', produce_id: '89' },
    ],
    [
      { id: 238, month: '10', produce_id: '39' },
      { id: 239, month: '10', produce_id: '41' },
      { id: 240, month: '10', produce_id: '3' },
      { id: 241, month: '10', produce_id: '46' },
      { id: 242, month: '10', produce_id: '55' },
      { id: 243, month: '10', produce_id: '12' },
      { id: 244, month: '10', produce_id: '16' },
      { id: 245, month: '10', produce_id: '17' },
      { id: 246, month: '10', produce_id: '18' },
      { id: 247, month: '10', produce_id: '65' },
      { id: 248, month: '10', produce_id: '25' },
      { id: 249, month: '10', produce_id: '69' },
      { id: 250, month: '10', produce_id: '90' },
      { id: 251, month: '10', produce_id: '81' },
      { id: 252, month: '10', produce_id: '36' },
      { id: 253, month: '10', produce_id: '87' },
      { id: 254, month: '10', produce_id: '89' },
    ],
    [
      { id: 255, month: '11', produce_id: '39' },
      { id: 256, month: '11', produce_id: '41' },
      { id: 257, month: '11', produce_id: '3' },
      { id: 258, month: '11', produce_id: '42' },
      { id: 259, month: '11', produce_id: '43' },
      { id: 260, month: '11', produce_id: '7' },
      { id: 261, month: '11', produce_id: '8' },
      { id: 262, month: '11', produce_id: '55' },
      { id: 263, month: '11', produce_id: '57' },
      { id: 264, month: '11', produce_id: '18' },
      { id: 265, month: '11', produce_id: '25' },
      { id: 266, month: '11', produce_id: '26' },
      { id: 267, month: '11', produce_id: '69' },
      { id: 268, month: '11', produce_id: '70' },
      { id: 269, month: '11', produce_id: '77' },
      { id: 270, month: '11', produce_id: '34' },
      { id: 271, month: '11', produce_id: '81' },
      { id: 272, month: '11', produce_id: '36' },
      { id: 273, month: '11', produce_id: '87' },
    ],
    [
      { id: 274, month: '12', produce_id: '2' },
      { id: 275, month: '12', produce_id: '39' },
      { id: 276, month: '12', produce_id: '41' },
      { id: 277, month: '12', produce_id: '3' },
      { id: 278, month: '12', produce_id: '42' },
      { id: 279, month: '12', produce_id: '43' },
      { id: 280, month: '12', produce_id: '5' },
      { id: 281, month: '12', produce_id: '6' },
      { id: 282, month: '12', produce_id: '7' },
      { id: 283, month: '12', produce_id: '8' },
      { id: 284, month: '12', produce_id: '47' },
      { id: 285, month: '12', produce_id: '48' },
      { id: 286, month: '12', produce_id: '9' },
      { id: 287, month: '12', produce_id: '55' },
      { id: 288, month: '12', produce_id: '57' },
      { id: 289, month: '12', produce_id: '11' },
      { id: 290, month: '12', produce_id: '18' },
      { id: 291, month: '12', produce_id: '25' },
      { id: 292, month: '12', produce_id: '26' },
      { id: 293, month: '12', produce_id: '28' },
      { id: 294, month: '12', produce_id: '70' },
      { id: 295, month: '12', produce_id: '32' },
      { id: 296, month: '12', produce_id: '33' },
      { id: 297, month: '12', produce_id: '77' },
      { id: 298, month: '12', produce_id: '34' },
      { id: 299, month: '12', produce_id: '83' },
      { id: 300, month: '12', produce_id: '36' },
      { id: 301, month: '12', produce_id: '87' },
      { id: 302, month: '12', produce_id: '37' },
    ],
  ])
}
