function panel_extrude_1_outline_fn(){
    return new CSG.Path2D([[-7.5,-8.5],[6.6247741,-8.5]]).appendArc([7.3138676,-8.5968458],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([71.0747599,-26.8799875]).appendArc([72.8852856,-29.3267727],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([72.8704777,-30.1751194]).appendArc([73.852873,-31.1924195],{"radius":1,"clockwise":false,"large":false}).appendPoint([86.5796674,-31.4145665]).appendArc([87.2251299,-31.5110315],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([108.6842034,-37.6643219]).appendArc([109.207134,-37.8809267],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([126.1338267,-47.2635457]).appendArc([129.5324,-46.2890203],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([138.0165682,-30.9831756]).appendArc([137.042043,-27.5846023],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([122.287976,-19.4062893]).appendArc([121,-17.21974],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([121,20.1666667]).appendArc([118.5,22.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([116,22.6666667]).appendPoint([116,53.1666667]).appendArc([113.5,55.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([69,55.6666667]).appendPoint([69,57.5]).appendArc([68,58.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([53.1,58.5]).appendArc([50.6,61],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([50.6,61.6666667]).appendArc([48.1,64.1666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([33.1,64.1666667]).appendArc([30.6,61.6666667],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([30.6,61]).appendArc([28.1,58.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([12.5,58.5]).appendArc([10,56],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([10,49]).appendArc([7.5,46.5],{"radius":2.5,"clockwise":true,"large":false}).appendPoint([-7.5,46.5]).appendArc([-10,44],{"radius":2.5,"clockwise":false,"large":false}).appendPoint([-10,-6]).appendArc([-7.5,-8.5],{"radius":2.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function bottom_case_fn() {
                    

                // creating part 0 of case bottom
                let bottom__part_0 = panel_extrude_1_outline_fn();

                // make sure that rotations are relative
                let bottom__part_0_bounds = bottom__part_0.getBounds();
                let bottom__part_0_x = bottom__part_0_bounds[0].x + (bottom__part_0_bounds[1].x - bottom__part_0_bounds[0].x) / 2
                let bottom__part_0_y = bottom__part_0_bounds[0].y + (bottom__part_0_bounds[1].y - bottom__part_0_bounds[0].y) / 2
                bottom__part_0 = translate([-bottom__part_0_x, -bottom__part_0_y, 0], bottom__part_0);
                bottom__part_0 = rotate([0,0,0], bottom__part_0);
                bottom__part_0 = translate([bottom__part_0_x, bottom__part_0_y, 0], bottom__part_0);

                bottom__part_0 = translate([0,0,0], bottom__part_0);
                let result = bottom__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return bottom_case_fn();
            }

        