import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-coffe-match',
  templateUrl: './coffe-match.component.html',
  styleUrls: ['./coffe-match.component.css'],
  providers: [TitleCasePipe]
})
export class CoffeMatchComponent implements OnInit {
  
  coffeeName = "";
  coffeeImage = '';
  coffeeDesc = '';

  constructor(private titleCasePipe: TitleCasePipe) { }

  ngOnInit(): void {

  }

 

  brews = [
    { name: 'Rainbow Crystal', total: 54, description: 'mango. honeydew. grapefruit', image: '/assets/images/crystal.png' },
    { name: 'Pieces of Rainbow', total: 58, description: 'lemon. brown sugar',image: '/assets/images/rainbow.png' },
    { name: 'Vapor', total: 59, description: 'fig. strawberry', image: '/assets/images/vapor.png' },
    { name: 'Hexagonal', total: 62, description: 'almond. cashew. rye bread', image: '/assets/images/hexagonal.png' },
    { name: 'Sunlight', total: 63, description: 'dark chocolate. nutmeg. molasses', image: '/assets/images/sunlight.png' },
    { name: 'Halo', total: 66, description: 'caramel. nutmeg. cinnamon rolls', image: '/assets/images/halo.png' },
    { name: 'Aura', total: 69, description: 'brazil nuts. cinnamon', image: '/assets/images/aura.png' },
    { name: 'Dreamsicle', total: 70, description: 'orange. vanilla', image: '/assets/images/dreamsicle.png' },
    { name: 'Meterology', total: 71, description: 'vanilla. cacao nibs', image: '/assets/images/meteorology.png' },
    { name: 'Kilimanjaro', total: 74, description: 'cranberry. cherry', image: '/assets/images/kilimanjaro.png' },
    { name: 'Parhelic Ring', total: 75, description: 'strawberry. lemon. hazelnut', image: '/assets/images/parhelic-ring.png' },
    { name: 'Optical Phenomenon', total: 77, description: 'cacao. plum. black currant', image: '/assets/images/optical.png' },
    { name: 'Bourbon Barrel', total: 78, description: 'whiskey. cardamom', image: '/assets/images/bourbon.png' },
    { name: 'Nimbus', total: 82, description: 'caramel. candied orange', image: '/assets/images/nimbus.png' },
    { name: 'Moondog', total: 86, description: 'chocolate. marshmallow', image: '/assets/images/moondog.png' },
    { name: 'Donkey Strong', total: 89, description: 'burnt sugar. toast. tobacco', image: '/assets/images/donkey.png' },
    { name: 'Prism', total: 117, description: 'sage. straw. tobacco', image: '/assets/images/prism.png' },
    { name: 'Refraction of Light', total: 121, description: 'apple. lavender. lemongrass', image: '/assets/images/refraction.png' },
    { name: 'Heirloom', total: 133, description: 'peach. plum. blueberry', image: '/assets/images/heirloom.png'},
    { name: 'Icebow', total: 137, description: 'hibiscus. raspberry. red grape', image: '/assets/images/icebow.png' },
    { name: 'Zenith', total: 148, description: 'jasmine. honeysuckle. maple syrup', image: '/assets/images/zenith.png' },



  ];
  quizQuestions = [
    'What is your favorite flavor profile?',
    'How do you brew your coffee?',
    'How do you like your coffee roasted?',
  ];
  answerSetOne = [
    { name: 'citrusy or fruity', num: 1 },
    { name: 'roasted or nutty', num: 5 },
    { name: 'herbal or floral', num: 64 },
    { name: 'sweet or chocolatey', num: 13 },
  ];
  answerSetTwo = [
    { name: 'coffee maker', num: 18 },
    { name: 'pourover', num: 22 },
    { name: 'french press', num: 29 },
  ];
  answerSetThree = [
    { name: 'light', num: 35 },
    { name: 'medium', num: 40 },
    { name: 'dark', num: 55 },
  ];


  onSubmit(form: NgForm) {
    const candidateAnswer = this.addNums(form.form.value);
    const chosenBrew = this.selectBrew(candidateAnswer);
    this.coffeeName = chosenBrew?.name;
    this.coffeeDesc = chosenBrew?.description;
    this.coffeeImage = chosenBrew?.image;

    console.log(chosenBrew?.name);

    console.log(`\nYour Answer: ${candidateAnswer}`);
  
  }
  
  addNums(value: any) {
    return value['brewStyle'] + value['flavor'] + value['roast'];
  }
  selectBrew(answer: any) {
    for (let brew of this.brews) {
      if (brew['total'] === answer) {
        return brew;
      }
    }
    return;
  }



}