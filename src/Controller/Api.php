<?php

namespace Drupal\ai_agents_graph_explorer\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * Controller for the loading the agents.
 */
class Api extends ControllerBase {

  /**
   * Get all the agents as JSON.
   *
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   *   The JSON response.
   */
  public function getAgents() {
    // Load all the agents.
    /** @var \Drupal\ai_agents\Entity\AgentInterface[] $agents */
    $agents = $this->entityTypeManager()->getStorage('ai_agent')->loadMultiple();
    $data = [];
    foreach ($agents as $agent) {
      $data[] = [
        'id' => $agent->get('id'),
        'name' => $agent->get('label'),
        'description' => $agent->get('description'),
      ];
    }
    return new JsonResponse([
      'status' => 'success',
      'data' => $data,
    ]);
  }

}
