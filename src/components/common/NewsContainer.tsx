import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  padding: 10px;
  border-width:1px;
  border-color: #ccc;
  background-color:#ffff;
  border-radius:10px;
  margin-top:10px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color:black;
  margin-bottom: 10px;
`;

const Description = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
`;

const HighlightsContainer = styled.View`
  background-color: #ffff;
  padding: 10px;
  border-radius: 5px;
`;

const HighlightItem = styled.View`
  margin-bottom: 5px;
`;

const HighlightText = styled.Text`
  font-size: 14px;
  font-style: italic;
`;

const ImageContainer = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 10px;
`;


const deal = [
    {
    "uuid": "56ce31e5-4d96-4426-bc15-fa1749d83402",
    "title": "Defence Ministry Seals Procurement Deals Worth Rs 39,125 Crore",
    "description": "The defence ministry on Friday inked five military procurement deals worth Rs 39,125 crore.\n\nOf the five contracts, one was with the Hindustan Aeronautics Limited for procurement of aero-engines for MiG-29 aircraft, according to the ministry.",
    "keywords": "PTI, bqfree",
    "snippet": "Two contracts were firmed up with Larsen & Toubro Limited for the procurement of close-in weapon system and high-power radar. Two other deals were finalised wit...",
    "url": "https://www.ndtvprofit.com/business/defence-ministry-seals-procurement-deals-worth-rs-39125-crore",
    "image_url": "https://media.assettype.com/bloombergquint%2F2024-03%2F151250a2-8a20-4bbe-915f-b980df89cd9e%2Fmig29.jpg?rect=0%2C178%2C2500%2C1313&w=1200&auto=format%2Ccompress&ogImage=true",
    "language": "en",
    "published_at": "2024-03-01T10:06:07.000000Z",
    "source": "bloombergquint.com",
    "relevance_score": null,
    "entities": [
        {
            "symbol": "LT.BO",
            "name": "Larsen & Toubro Limited",
            "exchange": null,
            "exchange_long": null,
            "country": "in",
            "type": "equity",
            "industry": "Industrials",
            "match_score": 59.48412,
            "sentiment_score": -0.4767,
            "highlights": [
                {
                    "highlight": "Two contracts were firmed up with <em>Larsen</em> & <em>Toubro</em> <em>Limited</em> for the procurement of close-in weapon system and high-power radar. Two other deals were finalised with BrahMos Aerospace Private Limited for the procurement of BrahMos missiles.",
                    "sentiment": -0.4767,
                    "highlighted_in": "main_text"
                }
            ]
        }
    ],
    "similar": [
        {
            "uuid": "82ac4075-abfa-4dca-a3ad-fa6090668d92",
            "title": "Defence Ministry signs five capital acquisition contracts worth over Rs 39,000 cr",
            "description": "Out of the five contracts, one was with Hindustan Aeronautics Limited for procurement of Aero-engines for MiG-29 aircraft, two with Larsen & Toubro Limited for procurement of Close-in Weapon System (CIWS) and procurement of High-Power Radar (HPR) and two with BrahMos Aerospace Private Limited (BAPL) for procurement of BrahMos missiles and procurement of Ship borne BrahMos system for the Indian Defence Forces.",
            "keywords": "mod, hal, brahmos, Ministry of Defence, capital acquisition contracts, Hindustan Aeronautics Limited, Defence Ministry, Aero-engines, MiG-29 aircraft, Larsen & Toubro Limited",
            "snippet": "\n\n\n\n(You can now subscribe to our\n\n(You can now subscribe to our Economic Times WhatsApp channel\n\nThe Ministry of Defence MoD ) on Friday signed five capital ac...",
            "url": "https://economictimes.indiatimes.com/news/defence/defence-ministry-signs-five-capital-acquisition-contracts-worth-over-rs-39000-cr/articleshow/108133802.cms",
            "image_url": "https://img.etimg.com/thumb/msid-108133866,width-1200,height-630,imgsize-12582,overlay-etdefence/photo.jpg",
            "language": "en",
            "published_at": "2024-03-01T08:38:38.000000Z",
            "source": "economictimes.indiatimes.com",
            "relevance_score": null,
            "entities": [
                {
                    "symbol": "HAL.NS",
                    "name": "Hindustan Aeronautics Limited",
                    "exchange": null,
                    "exchange_long": null,
                    "country": "in",
                    "type": "equity",
                    "industry": "Industrials",
                    "match_score": 35.247726,
                    "sentiment_score": 0.3182,
                    "highlights": [
                        {
                            "highlight": "(You can now subscribe to our\n\n(You can now subscribe to our Economic Times WhatsApp channel\n\nThe Ministry of Defence MoD ) on Friday signed five capital acquisition contracts worth Rs 39,125.39 crore, the government said in a release.Out of the five contracts, one was with <em>Hindustan</em> <em>Aeronautics</em> <em>Limited</em> for procurement of Aero-engines for MiG-29",
                            "sentiment": 0.3182,
                            "highlighted_in": "main_text"
                        }
                    ]
                },
                {
                    "symbol": "LT.NS",
                    "name": "Larsen & Toubro Limited",
                    "exchange": null,
                    "exchange_long": null,
                    "country": "in",
                    "type": "equity",
                    "industry": "Industrials",
                    "match_score": 57.114964,
                    "sentiment_score": 0.081425,
                    "highlights": [
                        {
                            "highlight": "subscribe to our\n\n(You can now subscribe to our Economic Times WhatsApp channel\n\nThe Ministry of Defence MoD ) on Friday signed five capital acquisition contracts worth Rs 39,125.39 crore, the government said in a release.Out of the five contracts, one was with Hindustan Aeronautics Limited for procurement of Aero-engines for MiG-29 aircraft , two with <em>Larsen</em>",
                            "sentiment": 0.1027,
                            "highlighted_in": "main_text"
                        },
                        {
                            "highlight": "& <em>Toubro</em> <em>Limited</em> for procurement of Close-in Weapon System (CIWS) and procurement of High-Power Radar (HPR) and two with BrahMos Aerospace Private Limited (BAPL) for procurement of BrahMos missiles and procurement of Ship borne BrahMos system for the Indian Defence Forces.\"",
                            "sentiment": -0.4019,
                            "highlighted_in": "main_text"
                        },
                        {
                            "highlight": "\"The programme will focus on indigenisation of several high value critical components, which would help increase the indigenous content of future Repair and Overhaul (ROH) tasks of RD-33 aero-engines,\" it said.The contract for procurement of CIWS has been signed with <em>Larsen</em> & <em>Toubro</em> <em>Limited</em> at a cost of Rs 7,668.82 crore, highlighted the release.",
                            "sentiment": 0.6249,
                            "highlighted_in": "main_text"
                        },
                        {
                            "highlight": "\"The direct and indirect employment generated by this project would be approximately average of 2,400 persons/ year over the period of five years,\" it said.The contract for procurement of HPR has also been signed with <em>Larsen</em> & <em>Toubro</em> <em>Limited</em> at a cost of Rs 5,700.13 crore.",
                            "sentiment": 0,
                            "highlighted_in": "main_text"
                        }
                    ]
                },
                {
                    "symbol": "LTOUF",
                    "name": "Larsen & Toubro Limited",
                    "exchange": null,
                    "exchange_long": null,
                    "country": "us",
                    "type": "equity",
                    "industry": "Industrials",
                    "match_score": 57.111614,
                    "sentiment_score": 0.081425,
                    "highlights": [
                        {
                            "highlight": "subscribe to our\n\n(You can now subscribe to our Economic Times WhatsApp channel\n\nThe Ministry of Defence MoD ) on Friday signed five capital acquisition contracts worth Rs 39,125.39 crore, the government said in a release.Out of the five contracts, one was with Hindustan Aeronautics Limited for procurement of Aero-engines for MiG-29 aircraft , two with <em>Larsen</em>",
                            "sentiment": 0.1027,
                            "highlighted_in": "main_text"
                        },
                        {
                            "highlight": "& <em>Toubro</em> <em>Limited</em> for procurement of Close-in Weapon System (CIWS) and procurement of High-Power Radar (HPR) and two with BrahMos Aerospace Private Limited (BAPL) for procurement of BrahMos missiles and procurement of Ship borne BrahMos system for the Indian Defence Forces.\"",
                            "sentiment": -0.4019,
                            "highlighted_in": "main_text"
                        },
                        {
                            "highlight": "\"The programme will focus on indigenisation of several high value critical components, which would help increase the indigenous content of future Repair and Overhaul (ROH) tasks of RD-33 aero-engines,\" it said.The contract for procurement of CIWS has been signed with <em>Larsen</em> & <em>Toubro</em> <em>Limited</em> at a cost of Rs 7,668.82 crore, highlighted the release.",
                            "sentiment": 0.6249,
                            "highlighted_in": "main_text"
                        },
                        {
                            "highlight": "\"The direct and indirect employment generated by this project would be approximately average of 2,400 persons/ year over the period of five years,\" it said.The contract for procurement of HPR has also been signed with <em>Larsen</em> & <em>Toubro</em> <em>Limited</em> at a cost of Rs 5,700.13 crore.",
                            "sentiment": 0,
                            "highlighted_in": "main_text"
                        }
                    ]
                },
                {
                    "symbol": "LT.BO",
                    "name": "Larsen & Toubro Limited",
                    "exchange": null,
                    "exchange_long": null,
                    "country": "in",
                    "type": "equity",
                    "industry": "Industrials",
                    "match_score": 57.109627,
                    "sentiment_score": 0.081425,
                    "highlights": [
                        {
                            "highlight": "subscribe to our\n\n(You can now subscribe to our Economic Times WhatsApp channel\n\nThe Ministry of Defence MoD ) on Friday signed five capital acquisition contracts worth Rs 39,125.39 crore, the government said in a release.Out of the five contracts, one was with Hindustan Aeronautics Limited for procurement of Aero-engines for MiG-29 aircraft , two with <em>Larsen</em>",
                            "sentiment": 0.1027,
                            "highlighted_in": "main_text"
                        },
                        {
                            "highlight": "& <em>Toubro</em> <em>Limited</em> for procurement of Close-in Weapon System (CIWS) and procurement of High-Power Radar (HPR) and two with BrahMos Aerospace Private Limited (BAPL) for procurement of BrahMos missiles and procurement of Ship borne BrahMos system for the Indian Defence Forces.\"",
                            "sentiment": -0.4019,
                            "highlighted_in": "main_text"
                        },
                        {
                            "highlight": "\"The programme will focus on indigenisation of several high value critical components, which would help increase the indigenous content of future Repair and Overhaul (ROH) tasks of RD-33 aero-engines,\" it said.The contract for procurement of CIWS has been signed with <em>Larsen</em> & <em>Toubro</em> <em>Limited</em> at a cost of Rs 7,668.82 crore, highlighted the release.",
                            "sentiment": 0.6249,
                            "highlighted_in": "main_text"
                        },
                        {
                            "highlight": "\"The direct and indirect employment generated by this project would be approximately average of 2,400 persons/ year over the period of five years,\" it said.The contract for procurement of HPR has also been signed with <em>Larsen</em> & <em>Toubro</em> <em>Limited</em> at a cost of Rs 5,700.13 crore.",
                            "sentiment": 0,
                            "highlighted_in": "main_text"
                        }
                    ]
                },
                {
                    "symbol": "HAL.BO",
                    "name": "Hindustan Aeronautics Limited",
                    "exchange": null,
                    "exchange_long": null,
                    "country": "in",
                    "type": "equity",
                    "industry": "N/A",
                    "match_score": 35.247776,
                    "sentiment_score": 0.3182,
                    "highlights": [
                        {
                            "highlight": "(You can now subscribe to our\n\n(You can now subscribe to our Economic Times WhatsApp channel\n\nThe Ministry of Defence MoD ) on Friday signed five capital acquisition contracts worth Rs 39,125.39 crore, the government said in a release.Out of the five contracts, one was with <em>Hindustan</em> <em>Aeronautics</em> <em>Limited</em> for procurement of Aero-engines for MiG-29",
                            "sentiment": 0.3182,
                            "highlighted_in": "main_text"
                        }
                    ]
                }
            ]
        }
    ]
},
{
    "uuid": "dd31e3ae-424c-4379-a566-24a42db16e85",
    "title": "From Shadowfax To Capillary Technologies — Indian Startups Raised $381 Mn This Week",
    "description": "Indian Startup Funding: This week, Indian startup funding stood at $381.4 Mn across 27 deals, a 345% increase from last week",
    "keywords": "",
    "snippet": "After a slight dip, funding momentum across the Indian startup ecosystem shot back in the last week of February. Between February 26 and March 2, startups colle...",
    "url": "https://inc42.com/buzz/from-shadowfax-to-capillary-technologies-indian-startups-raised-381-mn-this-week/",
    "image_url": "https://inc42.com/wp-content/uploads/2024/03/Funding-Glore-social-1.png",
    "language": "en",
    "published_at": "2024-03-02T08:13:26.000000Z",
    "source": "inc42.com",
    "relevance_score": null,
    "entities": [
        {
            "symbol": "RELIANCE.NS",
            "name": "Reliance Industries Limited",
            "exchange": null,
            "exchange_long": null,
            "country": "in",
            "type": "equity",
            "industry": "Energy",
            "match_score": 24.59308,
            "sentiment_score": 0.0516,
            "highlights": [
                {
                    "highlight": "At a valuation of $8.5 Bn, <em>Reliance</em> <em>Industries</em> <em>Limited</em> (RIL), Viacom 18 Media Private Limited (Viacom18) and The Walt Disney Company have signed binding agreements to set up a joint venture (JV) on February 28. The resultant entity will be controlled by RIL.",
                    "sentiment": 0.0516,
                    "highlighted_in": "main_text"
                }
            ]
        },
        {
            "symbol": "DIS.SN",
            "name": "The Walt Disney Company",
            "exchange": null,
            "exchange_long": null,
            "country": "cl",
            "type": "equity",
            "industry": "Communication Services",
            "match_score": 29.023571,
            "sentiment_score": -0.1779,
            "highlights": [
                {
                    "highlight": "At a valuation of $8.5 Bn, Reliance Industries Limited (RIL), Viacom 18 Media Private Limited (Viacom18) and <em>The</em> <em>Walt</em> <em>Disney</em> <em>Company</em> have signed binding agreements to set up a joint venture (JV) on February 28. The resultant entity will be controlled by RIL.",
                    "sentiment": -0.1779,
                    "highlighted_in": "main_text"
                }
            ]
        },
        {
            "symbol": "DISCL.SN",
            "name": "THE WALT DISNEY COMPANY",
            "exchange": null,
            "exchange_long": null,
            "country": "cl",
            "type": "equity",
            "industry": "N/A",
            "match_score": 29.023571,
            "sentiment_score": -0.1779,
            "highlights": [
                {
                    "highlight": "At a valuation of $8.5 Bn, Reliance Industries Limited (RIL), Viacom 18 Media Private Limited (Viacom18) and <em>The</em> <em>Walt</em> <em>Disney</em> <em>Company</em> have signed binding agreements to set up a joint venture (JV) on February 28. The resultant entity will be controlled by RIL.",
                    "sentiment": -0.1779,
                    "highlighted_in": "main_text"
                }
            ]
        },
        {
            "symbol": "RELIANCE.BO",
            "name": "Reliance Industries Limited",
            "exchange": null,
            "exchange_long": null,
            "country": "in",
            "type": "equity",
            "industry": "Energy",
            "match_score": 24.593052,
            "sentiment_score": 0.0516,
            "highlights": [
                {
                    "highlight": "At a valuation of $8.5 Bn, <em>Reliance</em> <em>Industries</em> <em>Limited</em> (RIL), Viacom 18 Media Private Limited (Viacom18) and The Walt Disney Company have signed binding agreements to set up a joint venture (JV) on February 28. The resultant entity will be controlled by RIL.",
                    "sentiment": 0.0516,
                    "highlighted_in": "main_text"
                }
            ]
        },
        {
            "symbol": "DIS",
            "name": "The Walt Disney Company",
            "exchange": null,
            "exchange_long": null,
            "country": "us",
            "type": "equity",
            "industry": "Communication Services",
            "match_score": 29.02376,
            "sentiment_score": -0.1779,
            "highlights": [
                {
                    "highlight": "At a valuation of $8.5 Bn, Reliance Industries Limited (RIL), Viacom 18 Media Private Limited (Viacom18) and <em>The</em> <em>Walt</em> <em>Disney</em> <em>Company</em> have signed binding agreements to set up a joint venture (JV) on February 28. The resultant entity will be controlled by RIL.",
                    "sentiment": -0.1779,
                    "highlighted_in": "main_text"
                }
            ]
        },
        {
            "symbol": "WDP.DE",
            "name": "The Walt Disney Company",
            "exchange": null,
            "exchange_long": null,
            "country": "de",
            "type": "equity",
            "industry": "Communication Services",
            "match_score": 29.024553,
            "sentiment_score": -0.1779,
            "highlights": [
                {
                    "highlight": "At a valuation of $8.5 Bn, Reliance Industries Limited (RIL), Viacom 18 Media Private Limited (Viacom18) and <em>The</em> <em>Walt</em> <em>Disney</em> <em>Company</em> have signed binding agreements to set up a joint venture (JV) on February 28. The resultant entity will be controlled by RIL.",
                    "sentiment": -0.1779,
                    "highlighted_in": "main_text"
                }
            ]
        }
    ],
    "similar": []
}]
const NewsContainer = () => {
    const handlePress = (url: any): void => {
        Linking.openURL(url)
        .catch(error => {
            console.error('Error opening URL: ', error);
        });
    }

    return (
        deal.map((value: any, index: any) => (
            <TouchableOpacity key={index} onPress={() => handlePress(value.url)}>
            <Container key={index}>
              <Title>{value.title}</Title>
              <ImageContainer source={{ uri: value.image_url }} />
              <Description>{value.description}</Description>
            </Container>
            </TouchableOpacity>
          ))
       
    )
}
export default NewsContainer