import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public items: any = [];

  constructor() {
    this.items = [
      {
        expanded: false,
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor sapien in est euismod, eu dapibus ex dignissim. Nam efficitur pretium risus. Aenean nec vulputate quam, eu varius mi. Vestibulum quis tempus erat. Maecenas gravida elit nec ligula laoreet porttitor sed a sem. Curabitur lacinia finibus lobortis. Nulla lobortis condimentum cursus. Phasellus ut magna metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        title: "10 Places That You Can Find Germany."
       },
      {
        expanded: false,
        info: "Proin auctor sagittis accumsan. Sed semper nisi at facilisis vestibulum. Ut nec cursus turpis. Duis elit enim, pulvinar eu lorem tempus, dictum sagittis est. Vivamus risus nibh, dapibus sed dolor sed, commodo malesuada nisi. Nullam vel libero at odio consequat elementum. Donec et elementum nisl. Proin porttitor aliquet dictum. Maecenas dolor erat, rhoncus vel metus at, semper feugiat elit. Duis interdum pretium nulla, at posuere libero feugiat sit amet. Proin et lorem tristique, ultrices enim sed, rhoncus mi. Suspendisse eu lacinia neque.",
        title: "Germany Is So Famous, But Why?"
      },
      {
        expanded: false,
        info: "Aliquam ac lacus libero. Mauris vel lectus nec erat congue interdum vel eget metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce non porttitor odio. Cras vitae risus iaculis, posuere justo quis, posuere turpis. Aenean in lectus rutrum, luctus libero venenatis, viverra metus. Curabitur volutpat egestas mauris, ut egestas diam iaculis vitae. Praesent quis lectus aliquam, vestibulum arcu ut, pretium enim. Etiam mollis pulvinar metus pharetra rhoncus. Nullam pharetra, odio sit amet vestibulum ultrices, urna elit cursus nunc, nec suscipit felis nibh vitae nisl. Nunc lacus urna, condimentum vel purus eget, scelerisque vestibulum massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In sed lacinia erat. Cras eget mauris elit. Morbi vestibulum odio et augue fringilla, vitae facilisis leo tincidunt.",
        title: "Why Germany Had Been So Popular Till Now?"
       },
      {
        expanded: false,
        info: "Nullam convallis, tortor at consequat vestibulum, orci magna eleifend mi, ac convallis eros nulla vitae diam. Integer varius aliquet nulla ullamcorper aliquet. Suspendisse ultrices scelerisque urna, tristique suscipit arcu maximus in. Nulla id erat a turpis dictum dictum. Nunc sapien augue, vestibulum et tempor sed, tempus a est. Sed rutrum suscipit ante, sed ornare nunc faucibus eget. Nullam justo orci, ornare in libero vel, ornare luctus arcu. Aliquam non erat suscipit, tristique neque et, sollicitudin nisl. Vestibulum non tristique nisl. Donec vel elit nibh. Sed a lorem at elit tempus pulvinar tincidunt id tellus. Suspendisse semper est gravida aliquet vulputate.",
        title: "The Truth About Germany Is About To Be Revealed."
       },
      {
        expanded: false,
        info: "Etiam molestie tellus id nulla congue, scelerisque lacinia ante posuere. Nullam a faucibus dolor. Morbi tincidunt arcu sed pulvinar lacinia. Mauris eu pharetra ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse vulputate, ex malesuada tempus pulvinar, tortor nisi suscipit urna, quis porttitor risus turpis a nunc. Quisque aliquet ultrices commodo. Praesent malesuada, nisi eget viverra scelerisque, urna orci scelerisque mauris, eleifend laoreet ligula sapien quis ante. Mauris quis massa eros. Nulla id nibh risus. Mauris sit amet risus vel est egestas scelerisque eu non dui. Aenean hendrerit scelerisque velit, eget posuere elit molestie vel.",
        title: "The Worst Advices We've Heard For Germany."
       },
      {
        expanded: false,
        info: "Nullam id porta nibh. Etiam lacinia a lacus ut posuere. Pellentesque ligula metus, accumsan lobortis nulla sed, euismod egestas elit. Proin facilisis metus quis velit tempus auctor lobortis eget neque. Proin ut sapien faucibus, bibendum urna vitae, congue tortor. Integer a sapien facilisis, convallis nunc in, ultricies nunc. Fusce et eros justo. In fermentum, augue a convallis pulvinar, est eros mollis enim, id molestie urna dolor eu tellus. Cras quis tempus nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed imperdiet tincidunt metus, nec volutpat tortor sodales sit amet.",
        title: "How To Get People To Like Germany."
       },
      {
        expanded: false,
        info: "Etiam fermentum eget elit sed accumsan. Suspendisse potenti. Vestibulum non dolor nec dolor vulputate gravida sed sed dui. Ut ullamcorper tortor nec libero eleifend maximus. Proin eros diam, pharetra ut est ultrices, posuere venenatis nisi. Ut in nibh nibh. Donec viverra ex vel dolor eleifend accumsan.",
        title: "Ten Reliable Sources To Learn About Germany."
       },
      {
        expanded: false,
        info: "Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec elit leo, auctor at leo ut, accumsan interdum ante. Cras et metus facilisis, luctus ligula ac, faucibus lacus. Ut sodales eu dui quis gravida. Etiam iaculis vestibulum neque, non viverra mauris. Donec pretium venenatis enim, id condimentum urna fermentum vitae. Praesent id leo nibh.",
        title: "The Shocking Revelation of Germany."
       },
      {
        expanded: false,
        info: "Aenean eu efficitur libero, eu tempor justo. Integer dapibus leo in fermentum scelerisque. Pellentesque in scelerisque ligula. Maecenas quis orci arcu. Nullam consectetur eros sit amet urna scelerisque efficitur. Mauris mollis, lorem quis tempus porttitor, sapien magna iaculis massa, nec dictum lectus nibh quis lectus. Donec luctus, lacus sed tempor tristique, purus dolor lacinia erat, vitae tempor odio lectus non libero. Proin nec magna scelerisque, facilisis dui a, pretium arcu. Etiam pharetra massa non laoreet malesuada. Maecenas vel commodo nulla. Donec tincidunt mollis enim, sit amet eleifend magna interdum nec.",
        title: "5 Lessons That Will Teach You All You Need To Know About Germany."
      }
    ];
  }

  expandItem(item): void {
    if (item.expanded) {
      item.expanded = false;
    } else {
      this.items.map(listItem => {
        if (item === listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
}
