# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples :
#
#   movies = Movie.create([{ name : 'Star Wars' }, { name : 'Lord of the Rings' }])
#   Character.create(name : 'Luke', movie : movies.first)

neighborhoods = [{admiral: [98116, 98126]},
{alki: [98116]},
{arbor_Heights: [98146, 98136, 98126]},
{atlantic: [98144]},
{ballard: [98107]},
{beacon_Hill: [98144, 98108, 98118]},
{belltown: [98121]},
{bitter_Lake: [98133]},
{blue_Ridge: [98117]},
{brighton: [98118]},
{broadmoor: [98112]},
{broadview: [98177]},
{bryant: [98115, 98105]},
{capitol_Hill: [98102, 98112, 98122]},
{cedar_Park: [98125]},
{central_District: [98122]},
{clyde_Hill: [98039]},
{columbia_City: [98118]},
{crown_Hill: [98117]},
{denny_Blaine: [98112]},
{downtown: [98004]},
{eastlake: [98102]},
{fauntleroy: [98136, 98126]},
{first_Hill: [98104, 98122, 98101]},
{fremont: [98107, 98103]},
{georgetown: [98108, 98106]},
{green_Lake: [98103, 98195]},
{greenwood: [98103, 98117, 98107, 98133]},
{haller_Lake: [98133, 98125]},
{hawthorne_Hills: [98115, 98105]},
{highland_Park: [98106]},
{high_Point: [98126, 98106]},
{industrial_District: [98134]},
{interbay: [98119, 98199]},
{international_District: [98104, 98164, 98154]},
{laurelhurst: [98105]},
{leschi: [98122, 98144]},
{lower_Queen_Anne: [98119, 98109]},
{loyal_Heights: [98117, 98107]},
{madison_Park: [98112]},
{madison_Valley: [98112]},
{madrona: [98122]},
{magnolia: [98199]},
{maple_Leaf: [98125, 98115]},
{matthews_Beach: [98115, 98125]},
{meadowbrook: [98115, 98125]},
{montlake: [98112]},
{mount_Baker: [98144, 98108, 98118]},
{north_Beach: [98117]},
{north_College_Park: [98103, 98133]},
{north_Delridge: [98126, 98106]},
{northgate: [98125]},
{olympic_Hills: [98125]},
{olympic_Manor: [98117]},
{phinney_Ridge: [98103, 98107, 98117]},
{pinehurst: [98125]},
{pioneer_Square: [98104, 98134]},
{portage_Bay: [98102, 98112]},
{queen_Anne: [98119, 98109]},
{rainier_Beach: [98118, 98178]},
{ravenna: [98115, 98105]},
{riverview: [98106]},
{roosevelt: [98115]},
{roxhill: [98106, 98126]},
{sand_Point: [98115]},
{seward_Park: [98118]},
{south_Delridge: [98106]},
{south_Lake_Union: [98109]},
{south_Park: [98108]},
{sunset_Hill: [98107, 98117]},
{university_District: [98105]},
{victory_Heights: [98125]},
{view_Ridge: [98115]},
{wallingford: [98103, 98105]},
{wedgwood: [98115]},
{westlake: [98109]},
{west_Seattle: [98116, 98126, 98116]},
{whittier_Heights: [98117]},
{windermere: [98105, 98115]}]

neighborhoods.map {|neighborhood|
    neighborhood.each {|key, value| 
    name = Neighborhood.create(name: key.to_s.downcase.sub!("_", " "))
    value.each {|zipcode|
        zip = Zipcode.find_or_create_by(zipcode: zipcode)
        ZipcodeNeighborhood.create(neighborhood_id: name.id, zipcode_id: zip.id)
    }
    }

}