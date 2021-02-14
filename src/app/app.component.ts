import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    height = 220;
    width = 100;

    base_left = 10;
    base_top  = 10;

    base_height = 40;
    base_width  = 220

    rect_top = 50;

    rect_lef = 50;

    positions = [35, 100];

    //MaritalStatus
    //Married
    //Single

    FAMILY: Node[] = [
          { id: 1, name: 'Me'                            , sex: 'M', spouse: "Wife"                           , top:  190, left:   20 }
        , { id: 2, name: 'Father'                        , sex: 'M', spouse: "Mother"                         , top:   40, left:  -50 }
        , { id: 3, name: 'Father in Law'                 , sex: 'M', spouse: "Mother in Law"                  , top:  220, left: -270 }
        , { id: 4, name: 'Grandfather, Father'           , sex: 'M', spouse: "Grandmother, Father"            , top:  -95, left: -230 }        
        , { id: 5, name: 'Grandfather, Mother'           , sex: 'M', spouse: "Grandmother, Mother"            , top:  -25, left: -450 }
        , { id: 6, name: 'Grandfather in Law, FatherWife', sex: 'M', spouse: "Grandmother in Law, FatherWife" , top:   47, left: -670 }        
        , { id: 7, name: 'Grandfather in Law, MotherWife', sex: 'M', spouse: "Grandmother in Law, MotherWife" , top:  115, left: -890 }        
    ];




}

export interface Node {
    id: number;
    name: string;
    sex?: string;
    top: number;
    left: number;
    // pos?: number;
    spouse?: string;
    // son?: Node;
    // father?: Node;
    // mother?: Node;
}