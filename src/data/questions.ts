import { Question } from '../types';

export const questions: { [key: number]: Question[] } = {
  1: [
    {
      id: 1,
      type: 'mcq',
      text: 'Chúng ta có thể nhận biết từ trường bằng cách nào?',
      options: ['Điện tích thử', 'Bút thử điện', 'Nam châm thử', 'Dòng điện thử'],
      correctAnswer: 2 // C
    },
    {
      id: 2,
      type: 'mcq',
      text: 'Hãy cho biết không gian xung quanh nam châm, xung quanh dòng điện tồn tại',
      options: ['Từ trường.', 'Trọng trường.', 'Điện trường.', 'Điện từ trường'],
      correctAnswer: 0 // A
    },
    {
      id: 3,
      type: 'mcq',
      text: 'Từ phổ là hình ảnh cụ thể về',
      options: ['các đường sức điện.', 'các đường sức từ.', 'cường độ điện trường.', 'cảm ứng từ.'],
      correctAnswer: 1 // B
    },
    {
      id: 4,
      type: 'mcq',
      text: 'Đường sức từ là những đường cong được vẽ theo quy ước sao cho:',
      options: [
        'Có chiều từ cực Nam tới cực Bắc bên ngoài thanh nam châm.',
        'Có độ mau thưa tùy ý.',
        'Bắt đầu từ cực này và kết thúc ở cực kia của nam châm.',
        'Có chiều từ cực Bắc tới cực Nam bên ngoài thanh nam châm.'
      ],
      correctAnswer: 3 // D
    },
    {
      id: 5,
      type: 'mcq',
      text: 'Cảm ứng ở sinh vật là:',
      options: [
        'khả năng tiếp nhận kích thích từ môi trường bên trong cơ thể.',
        'khả năng tiếp nhận kích thích và phản ứng lại các kích thích từ môi trường bên trong và bên ngoài cơ thể.',
        'khả năng phản ứng lại các kích thích từ môi trường bên ngoài cơ thể.',
        'khả năng tiếp nhận kích thích và phản ứng lại các kích thích từ môi trường bên ngoài cơ thể.'
      ],
      correctAnswer: 1 // B
    },
    {
      id: 6,
      type: 'mcq',
      text: 'Cơ sở khoa học của các biện pháp bảo quản nông sản là',
      options: [
        'tăng nhẹ cường độ hô hấp tế bào.',
        'giảm nhẹ cường độ hô hấp tế bào.',
        'giảm cường độ hô hấp tế bào tới mức tối thiểu.',
        'tăng cường độ hô hấp tế bào tới mức tối đa'
      ],
      correctAnswer: 2 // C
    },
    {
      id: 7,
      type: 'mcq',
      text: 'Khi nói về quá trình vận chuyển các chất trong cây, phát biểu nào sau đây đúng?',
      options: [
        'Vận chuyển trong mạch gỗ là chủ động, còn trong mạch rây là bị động.',
        'Dòng mạch gỗ luôn vận chuyển các chất vô cơ, dòng mạch rây luôn vận chuyển các chất hữu cơ.',
        'Mạch gỗ vận chuyển đường glucôzơ, mạch rây vận chuyển chất hữu cơ khác.',
        'Mạch gỗ vận chuyển các chất từ rễ lên lá, mạch rây thì vận chuyển các chất từ lá xuống rễ.'
      ],
      correctAnswer: 3 // D
    },
    {
      id: 8,
      type: 'mcq',
      text: 'Trong học tập, muốn nắm chắc kiến thức và ghi nhớ bài được lâu, em cần làm gì?',
      options: [
        'Chép bài của bạn, không học bài.',
        'Thường xuyên ôn lại bài và làm bài tập nhiều lần.',
        'Không làm bài tập về nhà.',
        'Nhờ bạn làm bài hộ, không ôn lại bài.'
      ],
      correctAnswer: 1 // B
    },
    {
      id: 9,
      type: 'mcq',
      text: 'Nước có vai trò:',
      options: [
        'là thành phần cấu tạo chủ yếu của tế bào và cơ thể, là nguyên liệu để tổng hợp chất hữu cơ trong quang hợp, là môi trường bên trong cơ thể sinh vật, góp phần vận chuyển các chất và điều hòa thân nhiệt.',
        'là thành phần cấu tạo chủ yếu của tế bào và cơ thể, là nguyên liệu để sinh vật hô hấp, là dung môi hòa tan nhiều chất, góp phần vận chuyển các chất và điều hòa thân nhiệt.',
        'là thành phần cấu tạo chủ yếu của tế bào và cơ thể, là nguyên liệu để tổng hợp chất hữu cơ trong quang hợp, là dung môi hòa tan nhiều chất, góp phần điều hòa thân nhiệt.',
        'là thành phần cấu tạo chủ yếu của tế bào và cơ thể, là nguyên liệu để tổng hợp chất hữu cơ trong quang hợp, là dung môi hòa tan nhiều chất, góp phần vận chuyển các chất và điều hòa thân nhiệt.'
      ],
      correctAnswer: 3 // D
    },
    {
      id: 10,
      type: 'mcq',
      text: 'Sản phẩm của quang hợp là:',
      options: ['nước, carbon dioxide.', 'ánh sáng, diệp lục.', 'oxygen, glucose.', 'glucose, nước.'],
      correctAnswer: 2 // C
    },
    {
       id: 11,
       type: 'mcq',
       text: 'Để thực hiện thí nghiệm chứng minh tính hướng nước của cây sẽ gồm thứ tự các bước:',
       options: ['1,2,3,4', '3, 1, 2, 4', '4, 2, 3, 1', '3, 2, 1, 4'],
       correctAnswer: 1 // B
    },
    {
       id: 12,
       type: 'mcq',
       text: 'Nếu thiếu nước, sự sinh trưởng và phát triển của thực vật sẽ',
       options: ['diễn ra bình thường.', 'diễn ra chậm hoặc ngừng lại.', 'ngay lập tức bị dừng lại.', 'diễn ra nhanh chóng hơn.'],
       correctAnswer: 1 // B
    },
    {
       id: 13,
       type: 'mcq',
       text: 'Hô hấp tế bào có vai trò như thế nào trong hoạt động sống của sinh vật?',
       options: [
         'Cung cấp khí oxygen cho hoạt động sống của sinh vật',
         'Cung cấp nước và nhiệt cho hoạt động sống của sinh vật.',
         'Cung cấp khí carbon dioxiode cho hoạt động sống của sinh vật.',
         'Cung cấp năng lượng cho hoạt động sống của sinh vật.'
       ],
       correctAnswer: 3 // D
    },
    {
      id: 14,
      type: 'mcq',
      text: 'Quá trình trao đổi khí ở người diễn ra theo cơ chế',
      options: ['Khuếch tán.', 'Chủ động', 'Thẩm thấu', 'Bổ sung'],
      correctAnswer: 0 // A
    },
    {
      id: 15,
      type: 'mcq',
      text: 'Trong các biện pháp phòng trừ sâu bệnh hại sau, biện pháp nào ứng dụng tập tính động vật:',
      options: ['Làm bẫy đèn bẫy côn trùng', 'Làm vệ sinh đồng ruộng', 'Bắt côn trùng bằng tay', 'Sử dụng thuốc để diệt côn trùng gây hại'],
      correctAnswer: 0 // A
    },
    {
      id: 16,
      type: 'mcq',
      text: 'Để cơ thể sinh trưởng và phát triển tốt cần:',
      options: [
        'Ăn nhiều thịt, không ăn rau xanh',
        'Ăn nhiều chất xơ, bớt thức ăn chứa nhiều đạm',
        'Ăn uống đủ chất, đa dạng về loại thức ăn và đảm bảo vệ sinh ăn uống',
        'Thích gì ăn đấy.'
      ],
      correctAnswer: 2 // C
    },
    {
      id: 17,
      type: 'mcq',
      text: 'Khi ở vị trí cân bằng, kim nam châm luôn chỉ hướng nào?',
      options: ['Đông – Bắc', 'Bắc – Nam', 'Tây – Nam', 'Đông - Nam'],
      correctAnswer: 1 // B
    },
    {
      id: 18,
      type: 'mcq',
      text: 'Lực tác dụng của nam châm lên các vật có từ tính và các nam châm khác gọi là gì?',
      options: ['Lực điện.', 'Lực ma sát.', 'Lực hấp dẫn.', 'Lực từ.'],
      correctAnswer: 3 // D
    },
    {
      id: 19,
      type: 'mcq',
      text: 'Vì sao lõi của nam châm điện không làm bằng thép mà lại làm bằng sắt non?',
      options: [
        'Vì lõi thép nhiễm từ yếu hơn lõi sắt non.',
        'Vì dùng lõi thép thì sau khi nhiễm từ sẽ biến thành một nam châm vĩnh cửu.',
        'Vì dùng lõi thép thì không thể làm thay đổi cường độ lực từ của nam châm điện.',
        'Vì dùng lõi thép thì lực từ bị giảm đi so với khi chưa có lõi.'
      ],
      correctAnswer: 1 // B
    },
    {
      id: 20,
      type: 'mcq',
      text: 'Trong quá trình trao đổi chất ở tế bào, khí carbon dioxide sẽ theo mạch máu tới bộ phận nào để thải ra ngoài?',
      options: ['Phổi', 'Dạ dày', 'Thận', 'Gan'],
      correctAnswer: 0 // A
    }
    // ... adding more later if needed, starting with 16 to keep it manageable but functional
  ],
  2: [
    {
      id: 1,
      type: 'true_false',
      text: 'Nhu cầu ánh sáng của cây ưa sáng và cây ưa bóng',
      statements: [
        { id: 'a', text: 'Các cây ưa sáng không cần nhiều ánh sáng mạnh, cây ưa bóng không cần nhiều ánh sáng.', isCorrect: false },
        { id: 'b', text: 'Cây ưa sáng cần nhiều ánh sáng mạnh, cây ưa bóng không cần nhiều ánh sáng', isCorrect: true },
        { id: 'c', text: 'Các cây ưa sáng cần nhiều ánh sáng mạnh, cây ưa bóng không cần ánh sáng.', isCorrect: false },
        { id: 'd', text: 'Các cây ưa sáng không cần ánh sáng, cây ưa bóng cần ánh sáng mạnh', isCorrect: false }
      ]
    },
    {
      id: 2,
      type: 'true_false',
      text: 'Nói về tập tính bẩm sinh:',
      statements: [
        { id: 'a', text: 'Tập tính bẩm sinh là loại tập tính sinh ra đã có được thừa hưởng từ bố mẹ, đặc trưng theo loài', isCorrect: true },
        { id: 'b', text: 'Tập tính bẩm sinh là loại tập tính sinh ra đã có, không được thừa hưởng từ bố mẹ, chỉ có ở cá thể đó.', isCorrect: false },
        { id: 'c', text: 'Tập tính bẩm sinh là loại tập tính học được trong đời sống, không thừa hưởng từ bố mẹ, chi có ở cá thể đó.', isCorrect: false },
        { id: 'd', text: 'Tập tính bẩm sinh là loại tập tính học được trong đời sống, không thừa hưởng từ bố mẹ, đặc trưng theo loài', isCorrect: false }
      ]
    }
  ],
  3: [
    {
      id: 1,
      type: 'short_answer',
      text: 'Kiến thức về nam châm và thiết kế điện',
      items: [
        { id: 'a', text: 'Hãy cho biết nam châm vĩnh cửu có mấy cực?', correctAnswer: '2' },
        { id: 'b', text: 'Trong các vật sau: Kẽm, nhôm, sắt, gỗ, thép, gạch, viên sỏi. Nam châm có thể hút được mấy vật?', correctAnswer: '2' },
        { id: 'c', text: 'Trong các thiết bị sau: Loa điện, tủ lạnh, chuông điện, máy lọc nước. Có mấy thiết bị sử dụng nam châm điện?', correctAnswer: '2' },
        { id: 'd', text: 'Hãy cho biết cấu tạo của la bàn gồm mấy bộ phận?', correctAnswer: '3' }
      ]
    },
    {
      id: 2,
      type: 'short_answer',
      text: 'Quang hợp và hô hấp',
      items: [
        { id: 'a', text: 'Trong quá trình quang hợp có mấy yếu tố chủ yếu ảnh hưởng đến quá trình này?', correctAnswer: '4' },
        { id: 'b', text: 'Có mấy yếu tố chủ yếu ảnh hưởng đến hô hấp tế bào?', correctAnswer: '4' },
        { id: 'c', text: 'Cho các loài cây: cây lúa, cây phi lao, cây ngô, cây lá lốt, cây dương xỉ, cây nhãn, cây khế, cây ổi. Có mấy loài cây ưa bóng?', correctAnswer: '2' },
        { id: 'd', text: 'Cho các loài cây: cây ngải cứu, cây lá lốt, cây trầu bà, cây mít, cây chuối, cây sen, cây vạn tuế. Có mấy loài cây ưa sáng?', correctAnswer: '4' }
      ]
    }
  ]
};
